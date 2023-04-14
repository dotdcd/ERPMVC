$(function () {    

    var IdEdificio = 0;    
   
    $(document).ready(function () {

    });

    
    $("#proveedor").select2({
        ajax: {
            url: '/Admin/GetProveedores',
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
            var id = 0;
            var text = 'Seleccione';
            var data = { id: id, text: text };
            callback(data);
        }
    });

    $('#proveedor').change(function () {
        $('#proveedorId').val($(this).val());
        $('#proveedortext').val($("#proveedor option:selected").text());
    });

    $("#activo").select2({
        ajax: {
            url: '/Admin/GetActivos',
            width: 'resolve',
            data: function (params) {
                return {
                    addNA: 0
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
            var id = 0;
            var text = 'Seleccione';
            var data = { id: id, text: text };
            callback(data);
        }
    });

    $('#activo').change(function () {
        $('#itemId').val($(this).val());
        $('#itemtext').val($("#activo option:selected").text());
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
      

    $('#edificio').change(function () {
        IdEdificio = $(this).val();        
        $('#edificiotext').val($("#edificio option:selected").text());
        $("#unidad").val('').trigger('change');
        $('#unidadId').val('');
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
   
   
});