$(function () {    

    var IdEdificio = 0;    
    var IdUnidad = 0;    
   
    $(document).ready(function () {
        //$("#nombre").attr('disabled', true);
        $("#edificio").attr('disabled', true);
        $("#unidad").attr('disabled', true);
        $("#personasdepartamento").attr('disabled', true);
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
        }
    });


    $('#edificio').change(function () {
        IdEdificio = $(this).val();
        $('#edificioId').val(IdEdificio);
        $('#edificiotext').val($("#edificio option:selected").text());
        $("#unidad").val('').trigger('change');
        $('#unidadId').val('');
    });

    $('#unidad').change(function () {        
        $('#unidadId').val($(this).val());
        IdUnidad = $(this).val();
        $('#unidadtext').val($("#unidad option:selected").text());        
    });       

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
   
    $('#fecharegistro').datepicker();
    $('#fecharegistro').on('changeDate', function (ev) {
        $(this).datepicker('hide');
    });

    $('#fecharegistropoder').datepicker();
    $('#fecharegistropoder').on('changeDate', function (ev) {
        $(this).datepicker('hide');
    });

    $('#fechaconstitucion').datepicker();
    $('#fechaconstitucion').on('changeDate', function (ev) {
        $(this).datepicker('hide');
    });

    $('#fechaconstitucionpoder').datepicker();
    $('#fechaconstitucionpoder').on('changeDate', function (ev) {
        $(this).datepicker('hide');
    });

    $('#fechacontrato').datepicker();
    $('#fechacontrato').on('changeDate', function (ev) {
        $(this).datepicker('hide');
    });

    $('#fechafirma').datepicker();
    $('#fechafirma').on('changeDate', function (ev) {
        $(this).datepicker('hide');
    });

    $("#btnSubmit").click(function (e) {
        e.preventDefault();        
        
        $.ajax({
            type: "POST",
            url: '/Admin/GenerarPDF',
            data: $('#generarContrato').serialize(),
            success: function (data) {
                window.location.href = '/Admin/SolicitudesAut';
            }
        });
    });

    $('#example2 tbody').on('click', 'button', function () {
        // debugger;
        var data = table.row($(this).parents('tr')).data();
        var idSolicita = data.idSolicita;
        var idContrato = data.idContrato;
        var url = '';
        url = '/Admin/GenerarContrato?id=' + idSolicita + '&idContrato=' + idContrato;
        window.location.href = url;
    });

    $("#btnChange").click(function (e) {
        e.preventDefault();
        var idContrato = $('#idContrato').val();
        var url = '';
        url = '/Admin/CambiarUnidad?idContrato=' + idContrato;
        window.location.href = url;        
    });


    $("#btnRevoke").click(function (e) {
        e.preventDefault();

        if (confirm('Desea cancelar este contrato?')) {
            var id_contrato = $('#idContrato').val();
            
            $.ajax({
                type: "POST",
                url: '/Admin/CancelarContrato',
                data: { idContrato: id_contrato },
                success: function (data) {
                    window.location.href = '/Admin/SolicitudesAut';
                }
            });
        }
    });

});