$(function () {
    //Initialize Select2 Elements
    //// $('.select2').select2();

    var IdEdificio = 0;    
    var IdUnidad = 0;    
    var duracion = 0;    
    var numPersonas = 0;

    $(document).ready(function () {
        
        $('#linear').signaturePad({ drawOnly: true, lineTop: 200 });
        
        numPersonas = 1;
        $("#numPersonas").attr('disabled', true);
        $("#personas").val(numPersonas);
        
        var status = $('#IdStatus').val();        
        if (status === '1') {
            if ($("#universidad").length) {
                $("#universidad").attr('disabled', true);
                $("#alumno").attr('disabled', true);
            }

            $("#edificio").attr('disabled', true);
            $("#unidad").attr('disabled', true);
            $("#duracion").attr('disabled', true);
            $("#datepicker").attr('disabled', true);

            if ($("#empresa").length) {
                $("#empresa").attr('disabled', true);
                $("#ciudad").attr('disabled', true);
                $("#numero").attr('disabled', true);
                $("#colonia").attr('disabled', true);
                $("#calle").attr('disabled', true);
                $("#estado").attr('disabled', true);
                $("#pais").attr('disabled', true);
                $("#nombrejefe").attr('disabled', true);
                $("#telefonojefe").attr('disabled', true);
                $("#telefonooficina").attr('disabled', true);
                $("#correojefe").attr('disabled', true);
            }

            $("#nombreemergencia").attr('disabled', true);
            $("#telemergencia").attr('disabled', true);
            $("#correoemergencia").attr('disabled', true);
            $("#parentescoemergencia").attr('disabled', true);

            $("#nombreaval").attr('disabled', true);
            $("#telefonoaval").attr('disabled', true);
            $("#correoaval").attr('disabled', true);
            $("#parentescoaval").attr('disabled', true);

            $("#btnSubmit").attr('disabled', true);
            $("#btnSign").attr('disabled', true);
            $("#btnClean").attr('disabled', true);
        }
        else {
            $('#conaval').val('ConAval');
            $('#conaval').prop('checked', true);
        }
    });

    $("#edificio").select2({
        ajax: {
            url: '/Solicitud/GetEdificios',
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
            var text = $('#edificiotext').val(); //item.data('Edificio A');
            var data = { id: id, text: text };            
            callback(data);
            IdUnidad = $('#unidadId').val();
            IdEdificio = $('#edificioId').val();
            duracion = $('#duraciontext').val();
        }
    });

    $('#edificio').change(function () {
        IdEdificio = $(this).val();
        $('#edificioId').val(IdEdificio);
        $('#edificiotext').val($("#edificio option:selected").text());
        $("#unidad").val('').trigger('change');
        $('#unidadId').val('');
        if (IdEdificio == 6) {
            $("#numPersonas").attr('disabled', false);
        }
        else {
            $("#numPersonas").attr('disabled', true);
            if (IdEdificio == 7) {
                numPersonas = 2;                                
            }
            else {                
                numPersonas = 1;
            }            
            $('#personas').val(numPersonas);
            $('#numPersonas').val(numPersonas);
            $('#numPersonas').val($("#numPersonas option:selected").text());                
        }
    });

    $('#unidad').change(function () {        
        $('#unidadId').val($(this).val());
        IdUnidad = $(this).val();
        $('#unidadtext').val($("#unidad option:selected").text());
        getPrice();
    });

    $('#duracion').change(function () {
        $('#duraciontext').val($(this).val());
        duracion = $(this).val();
        getPrice();
    });

    $('#numPersonas').change(function () {        
        numPersonas = $(this).val();
        $("#personas").val(numPersonas);
        getPrice();
    });

    $('#sinaval').change(function () {        
        $('#nombreaval').val('Quimarro');
        $('#telefonoaval').val('NA');
        $('#correoaval').val('comercial@rentadmin.mx');
        $('#parentescoaval').val('NA');
        $("#nombreaval").attr('readonly', true);
        $("#telefonoaval").attr('readonly', true);
        $("#correoaval").attr('readonly', true);
        $("#parentescoaval").attr('readonly', true);
    });
    $('#conaval').change(function () {
        $('#nombreaval').val('');
        $('#telefonoaval').val('');
        $('#correoaval').val('');
        $('#parentescoaval').val('');
        $("#nombreaval").attr('readonly', false);
        $("#telefonoaval").attr('readonly', false);
        $("#correoaval").attr('readonly', false);
        $("#parentescoaval").attr('readonly', false);
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


    function getPrice() {
        $.ajax({
            type: "POST",
            url: '/Solicitud/GetPrice',
            data: { param1: IdUnidad, param2: duracion, param3: numPersonas },
            success: function (data) {
                var price = data;
                $('#precio').val(price);
            }
        });
    }

    $("#unidad").select2({
        
        ajax: {
            url: '/Solicitud/GetUnidades',
            width: 'resolve',
            data: function (params) {                
                return {
                    filtro: IdEdificio// search term
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
            var text = $('#unidadtext').val();
            var data = { id: id, text: text };
            callback(data);
        }
    });
   
    //Date range picker
    $('#datepicker').datepicker({
        //startDate: '+0d',
        autoclose: true
    });

    
    $("#btnSign").click(function (e) {
        $('#firmavalidacion').val("1");
    });

    $("#btnClean").click(function (e) {
        $('#firmavalidacion').val("");
    });

    $("#btnSave").click(function (e) {
        e.preventDefault();
        var img = $('#imgValue').val();

        $.ajax({
            type: "POST",
            url: '/Solicitud/SignImage',
            data: '{ "imageData" : "' + img + '" }',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (msg) {
                alert('Image saved successfully !');
            }            
        });
    });


    /*
    $("#saveSignature").change({        
        ajax: {
            type: 'POST',
            url: '/Solicitud/SignImage',
            data: '{ "imageData" : "' + $('#imgValue').val() + '" }',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (msg) {
                alert('Image saved successfully !');
            }
        }
    });
    */

});