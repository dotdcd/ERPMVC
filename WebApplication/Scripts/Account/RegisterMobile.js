$(function () {

    $(document).ready(function () {
        var o = $("<option/>", { value: 'MEX', text: 'México' });
        $('#paisorigen').append(o);
        $('#paisorigen').trigger('change');
    });

    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });

    $("#pais").select2({
        ajax: {
            url: '/Account/GetPaises',
            width: 'resolve',
            data: function (params) {
                return {
                    q: params.term// search term
                };
            },
            processResults: function (data) {
                return {
                    results: data.items
                };
            },
            minimumInputLength: 2,
            width: 'resolve'
        },
        initSelection: function (item, callback) {
            var id = item.val();
            var text = $('#paistext').val(); //item.data('Edificio A');
            var data = { id: id, text: text };
            callback(data);
            IdPais = $('#paisId').val();
        }
    });

    $('#paisorigen').change(function () {
        IdPais = $(this).val();
        $('#paisId').val(IdPais);
        $('#paistext').val($("#paisorigen option:selected").text());

        if (IdPais == 'MEX') {
            $('#labelRFC').text('RFC o Matrícula de Escuela si es estudiante');
            $('#labelCurp').text('CURP');
        }
        else {
            $('#labelRFC').text('Pasaporte');
            $('#labelCurp').text('FM3 o Matrícula de Escuela si es estudiante');
        }
    });

    $('#genero').change(function () {
        $('#generotext').val($(this).val());        
    });

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    /*
    $("#form_register").on("submit", function () {
        if (isMobile.any()) {
            alert('Esta aplicación se encuentra deshabilitada para teléfonos/tablets/ipads.');
            return false;
        }
        else
            return true;
    })
    */

    
});