$(function () {


    $(document).ready(function () {
        $("#nombre").attr('disabled', true);
        $("#email").attr('disabled', true);

        $('#linear').signaturePad({ drawOnly: true, lineTop: 200 });

        var o = $("<option/>", { value: 'MEX', text: 'México' });
        $('#paisorigen').append(o);
        $('#paisorigen').trigger('change');
    });

    $("#paisorigen").select2({
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
            var text = $('#paistext').val();
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
            $('#labelRFC').text('RFC');
            $('#labelCurp').text('CURP');
        }
        else {
            $('#labelRFC').text('RFC (Para Extranjero NA)');
            $('#labelCurp').text('Pasaporte');
        }
    });

    $("#Identificacion").change(function () {
        $('#identificaciontext').val($(this).val());
    });

    $("#Ingreso").change(function () {
        $('#ingresotext').val($(this).val());
    });

    $("#Ingreso2").change(function () {
        $('#ingresotext2').val($(this).val());
    });

    $("#Ingreso3").change(function () {
        $('#ingresotext3').val($(this).val());
    });

    $("#ComprobanteDom").change(function () {
        $('#comprobantetext').val($(this).val());
    });

    $("#btnSave").click(function (e) {
        e.preventDefault();
        var img = $('#imgValue').val();
        var IdAval = $('#IdAval').val();        
        $.ajax({
            type: "POST",
            url: '/Account/SignImage',
            //data: '{ "id": "' + IdAval + '", "imageData" : "' + img + '" }',
            data: "{'id':'" + IdAval + "', 'imageData':'" + img + "'}",            
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (msg) {
                alert('Image saved successfully !');
            }            
        });
    });

    $('#genero').change(function () {
        $('#generotext').val($(this).val());
    });

});