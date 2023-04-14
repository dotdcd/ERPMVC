$(function () {    

    var IdEdificio = 0;    
   
    $(document).ready(function () {

    });

    
    $("#empleado").select2({
        ajax: {
            url: '/Admin/GetEmpleados',
            width: 'resolve',
            data: function (params) {
                return {
                    q: params.term
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
            var text = $('#empleadotext').val();
            var data = { id: id, text: text };
            callback(data);
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
            var text = $('#edificiotext').val();
            var data = { id: id, text: text };
            callback(data);
            IdUnidad = $('#unidadId').val();
            IdEdificio = $('#edificioId').val();           
        }
    });


    $('#empleado').change(function () {
        $('#empleadoId').val($(this).val());
        $('#empleadotext').val($("#empleado option:selected").text());
    });       

    $('#edificio').change(function () {
        IdEdificio = $(this).val();
        $('#edificioId').val(IdEdificio);
        $('#edificiotext').val($("#edificio option:selected").text());
        $("#unidad").val('').trigger('change');
        $('#unidadId').val('');
    });

    $('#tipoentrega').change(function () {        
        $('#tipoentregaId').val($(this).val());
        $('#tipoentregatext').val($("#tipoentrega option:selected").text());        
    });    

    $('#unidad').change(function () {        
        $('#unidadId').val($(this).val());
        $('#unidadtext').val($("#unidad option:selected").text());        
    });       

    $("#unidad").select2({
        
        ajax: {
            url: '/Solicitud/GetUnidadesTodas',
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
   
    $('#fechaactividad').datepicker();
    $('#fechaactividad').on('changeDate', function (ev) {
        $(this).datepicker('hide');
    });
   
});