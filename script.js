$(function () {
    const fontStyleLinks = $('.fontStyleLink');
    const fontSizeLinks = $('.fontSizeLink');
    const colorsText = $('#modalColorsText .box');
    const backgroundBox = $('#modalBackground #box');
    let backgroundColor;
    let backgroundImage;
    let backgroundFile;
    let colorText;

    let formRegistration = document.forms['registrationForm'];
    let login = formRegistration.login;
    let password = formRegistration.password;

    let formbuildTable = document.forms['buildTableForm'];
    let countTR = formbuildTable.countTR;
    let countTD = formbuildTable.countTD;
    let widthTD = formbuildTable.widthTD;
    let heightTD = formbuildTable.heightTD;
    let widthBorder = formbuildTable.widthBorder;
    let styleBorder = formbuildTable.styleBorder;


    $('.align').each(function (index, element) {
        $(element).click(() => {
            let textAlign = $(this).attr('id');
            $('.content1').css({
                textAlign: textAlign
            });
        })
    })

    let changeTextDecoration = element => {
        $('.content1').toggleClass($(element).attr('id'));
    }
    $('.textDecoration').each(function (index, element) {
        $(element).click(() => {
            changeTextDecoration(element);
        })
    })

    $('.fontStyleBurger').click(function () {
        $('.fontStyleMenu, .fontStyleBurger').toggleClass('active');
    })
    $('.fontSizeBurger').click(function () {
        $('.fontSizeMenu, .fontSizeBurger').toggleClass('active');
    })

    $('.fontStyleLink').each(function (index, element) {
        $(element).click(() => {
            text = $(this).text();
            $('p').css({
                fontFamily: text
            });
            $('.fontStyleMenu, .fontStyleBurger').toggleClass('active');
        })
    })
    $('.fontSizeLink').each(function (index, element) {
        $(element).click(() => {
            size = $(this).text();
            $('p').css({
                fontSize: size
            });
            $('.fontSizeMenu, .fontSizeBurger').toggleClass('active');
        })
    })

    colorsText.click(function () {
        colorText = $(this).css("background-color");
        $('.content1').css('color', `${colorText}`);
    });

    backgroundBox.each(function (index, element) {
        $(element).click(function () {
            let className = $(element).attr("class");
            if (className == 'imageBox') {
                backgroundImage = $(this).css("backgroundImage");
                $('main').css('backgroundImage', `${backgroundImage}`);
                $('main').css('backgroundColor', 'none');
            } else if (className == 'box') {
                backgroundColor = $(this).css("backgroundColor");
                $('main').css('backgroundColor', `${backgroundColor}`);
                $('main').css('backgroundImage', `none`);
            }
        })
    })

    $('input[type="file"]').change(function (e) {
        backgroundFile = URL.createObjectURL(e.target.files[0]);
        $('main').css({
            background: `url(${backgroundFile}) 100% 100%`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        });
    });

    $(document).on('change', '.btn-file :file', function () {
        let input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });
    $('.btn-file :file').on('fileselect', function (event, numFiles, label) {
        let input_label = $(this).closest('.input-group').find('.file-input-label'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;
        if (input_label.length) {
            input_label.text(log);
        } else {
            if (log) alert(log);
        }
    });

    $('#registration').on('shown.bs.modal', function () {
        $('#registration').trigger('focus')
    })

    $("#registrationForm").on("submit", function () {
        if (login.value == "admin" && password.value == "admin") {
            $('#registration').modal('hide');
            $('input[name="login"]').removeClass('invalid');
            $('input[name="password"]').removeClass('invalid');
            $('.invalid-feedback').text('');
            form.reset();
        } else if (!login.value && !password.value) {
            $('.invalid-feedback').text('Value is empty');
            $('input[name="login"]').addClass('invalid');
            $('input[name="password"]').addClass('invalid');
        } else if (login.value != 'admin' && password.value != 'admin') {
            $('input[name="login"]').addClass('invalid')
            $('input[name="password"]').addClass('invalid');
            $('.invalid-feedback').text('Please check your login or password');
        }
        return false;
    })

    $('.showCode').click(() => {
        $('.buttonsPanel1').hide(500);
        $('.content1').hide(500);
        $('.buttonsPanel2').css('display', 'flex');
        $('.content2').show(500);
        $('textarea').text($('.content1').html());
    })

    $('.saveChanges').click(() => {
        $('.buttonsPanel2').hide(500);
        $('.content2').hide(500);
        $('.buttonsPanel1').css('display', 'flex');
        $('.content1').show(500).html($('textarea').val())
    })
    $('#buildTable').on('shown.bs.modal', function () {
        $('#buildTable').trigger('focus')
    })
    // $("#buildTableForm").on("submit", function () {
    //     if (login.value == "admin" && password.value == "admin") {
    //         $('#registration').modal('hide');
    //         $('input[name="login"]').removeClass('invalid');
    //         $('input[name="password"]').removeClass('invalid');
    //         $('.invalid-feedback').text('');
    //         form.reset();
    //     } else if (!login.value && !password.value) {
    //         $('.invalid-feedback').text('Value is empty');
    //         $('input[name="login"]').addClass('invalid');
    //         $('input[name="password"]').addClass('invalid');
    //     } else if (login.value != 'admin' && password.value != 'admin') {
    //         $('input[name="login"]').addClass('invalid')
    //         $('input[name="password"]').addClass('invalid');
    //         $('.invalid-feedback').text('Please check your login or password');
    //     }
    //     return false;
    // })
































})