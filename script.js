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
    let colorBorder = formbuildTable.colorBorder;

    let formBuildListOl = document.forms['buildOlForm'];
    let countItemOl = formBuildListOl.countItemOl;
    let markOfListOl = formBuildListOl.markOfListOl;

    let formBuildListUl = document.forms['buildUlForm'];
    let countItemUl = formBuildListUl.countItemUl;
    let markOfListUl = formBuildListUl.markOfListUl;


    let openModal = (modalWindow) => {
        $(modalWindow).on('shown.bs.modal', function () {
            $(modalWindow).trigger('focus')
        })
    }
    openModal(registration);
    openModal(buildTable);
    openModal(buildListOl);
    openModal(buildListUl);

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

    $("#registrationForm").on("submit", function () {
        if (login.value == "admin" && password.value == "admin") {
            $('#registration').modal('hide');
            $('input[name="login"]').removeClass('invalid');
            $('input[name="password"]').removeClass('invalid');
            $('#registration .invalid-feedback').css('display', 'none');
            form.reset();
        } else if (!login.value && !password.value) {

            $('#registration .invalid-feedback').css('display', 'block').text('Value is empty');
            $('input[name="login"]').addClass('invalid');
            $('input[name="password"]').addClass('invalid');
        } else if (login.value != 'admin' && password.value != 'admin') {
            $('input[name="login"]').addClass('invalid')
            $('input[name="password"]').addClass('invalid');
            $('#registration .invalid-feedback').css('display', 'block').text('Please check your login or password');
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

    let checkValueNumber = function (value, element) {
        if (isNaN(value) || !value) {
            element.classList.add('invalid');
        } else {
            element.classList.remove('invalid');
        }
    }
    let checkValueSelect = function (value, element) {
        if (value == 'Choose color' || value == 'Choose style' || value == 'choose Ol type mark' || value == 'choose Ul type mark') {
            element.classList.add('invalid');
        } else {
            element.classList.remove('invalid');
        }
    }

    let createTable = (countTR, countTD, widthTD, heightTD, widthBorder, styleBorder, colorBorder) => {
        let table = "<table>";
        for (i = 0; i < countTR; i++) {
            table += "<tr>";
            for (j = 0; j < countTD; j++) {
                table += `<td style="width:${widthTD}px;height:${heightTD}px;border:${widthBorder}px ${styleBorder} ${colorBorder}">TD</td>`;
            }
            table += "</tr>";
        }
        table += "</table>";
        let currentVal = $('textarea').val();
        $('textarea').val(currentVal + table)
    }


    $('.createTable').on("click", function () {
        checkValueNumber(countTR.value, countTR);
        checkValueNumber(countTD.value, countTD);
        checkValueNumber(widthTD.value, widthTD);
        checkValueNumber(heightTD.value, heightTD);
        checkValueNumber(widthBorder.value, widthBorder);
        checkValueSelect(styleBorder.value, styleBorder);
        checkValueSelect(colorBorder.value, colorBorder);
        if (isValidClassTable()) {
            $('#buildTable .invalid-feedback').css('display', 'none');
            createTable(countTR.value, countTD.value, widthTD.value, heightTD.value, widthBorder.value, styleBorder.value, colorBorder.value);
        }
    })

    function isValidClassTable() {
        let isValid = true;
        $('#buildTableForm input, #buildTableForm select').each(function () {
            if ($(this).hasClass("invalid")) {
                $('#buildTable').modal('show');
                $('#buildTable .invalid-feedback').css('display', 'block');
                isValid = false;
                return;
            }
        });
        return isValid;
    }

    $('.resetFormTable').click(function (e) {
        $('#buildTableForm').trigger("reset");
        e.preventDefault();
        $('#buildTableForm input, #buildTableForm select').each(function () {
            $(this).removeClass("invalid");
        })
        $('#buildTable .invalid-feedback').css('display', 'none');
    });




    $('.createListOl').on("click", function () {
        checkValueNumber(countItemOl.value, countItemOl);
        checkValueSelect(markOfListOl.value, markOfListOl);

        if (isValidClassListOl()) {
            $('#buildListOl .invalid-feedback').css('display', 'none');
            createListOl(countItemOl.value, markOfListOl.value);
        }
    })

    function isValidClassListOl() {
        let isValid = true;
        $('#buildOlForm input, #buildOlForm select').each(function () {
            if ($(this).hasClass("invalid")) {
                $('#buildListOl').modal('show');
                $('#buildListOl .invalid-feedback').css('display', 'block');

                isValid = false;
                return;
            }
        });
        return isValid;
    }

    $('.resetFormListOl').click(function (e) {
        $('#buildOlForm').trigger("reset");
        e.preventDefault();
        $('#buildOlForm input, #buildOlForm select').each(function () {
            $(this).removeClass("invalid");
        })
        $('#buildListOl .invalid-feedback').css('display', 'none');
    });



    $('.createListUl').on("click", function () {
        checkValueNumber(countItemUl.value, countItemUl);
        checkValueSelect(markOfListUl.value, markOfListUl);

        if (isValidClassListUl()) {
            $('#buildListUl .invalid-feedback').css('display', 'none');
            createListUl(countItemUl.value, markOfListUl.value);
        }
    })

    function isValidClassListUl() {
        let isValid = true;
        $('#buildUlForm input, #buildUlForm select').each(function () {
            if ($(this).hasClass("invalid")) {
                $('#buildListUl').modal('show');
                $('#buildListUl .invalid-feedback').css('display', 'block');
                isValid = false;
                return;
            }
        });
        return isValid;
    }

    $('.resetFormListUl').click(function (e) {
        $('#buildUlForm').trigger("reset");
        e.preventDefault();
        $('#buildUlForm input, #buildUlForm select').each(function () {
            $(this).removeClass("invalid");
        })
        $('#buildListUl .invalid-feedback').css('display', 'none');
    });

    let createListOl = (countLi, markOfList) => {
        let list = "<ol>";
        for (i = 0; i < countLi; i++) {
            list += `<li style="list-style-type:${markOfList};">item</li>`;
        }
        list += "</ol>";
        let currentVal = $('textarea').val();
        $('textarea').val(currentVal + list)
    }

    let createListUl = (countLi, markOfList) => {
        let list = "<ul>";
        for (i = 0; i < countLi; i++) {
            list += `<li style="list-style-type:${markOfList};">item</li>`;
        }
        list += "</ul>";
        let currentVal = $('textarea').val();
        $('textarea').val(currentVal + list)
    }

})