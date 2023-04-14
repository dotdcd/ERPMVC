﻿

$(function () {

    var IdEdificio = 0;
    var IdUnidad = 0;   
    var tipo = 0;
    var areaId = 0;
    var empleadoId = 0;
    var fecha = '1900-01-01';

    $(document).ready(function () {
        getData();

        var o = $("<option/>", { value: '0', text: 'Todos' });
        $('#unidad').append(o);
        $('#unidad option[value="0"]').prop('selected', true);
        $('#unidad').trigger('change');

    });

    var myCallback = function () {
        var table = $('#example2').DataTable();
        $('#example2').DataTable().draw();
    };

    $("#btnSubmit").click(function () {
        fecha = $('#fechaactividad').val();
        if (fecha.length <= 5) {
            fecha = '1900-01-01';
        }
        $('#example2').DataTable().ajax.reload(myCallback);
    });

    function getData() {
        var table = $('#example2').DataTable({
            "paging": true,
            "lengthChange": false,
            "dom": 'Bfrtip',
            buttons: ['csv', 'pdf'],
            "searching": false,
            "ordering": true,
            "info": true,
            "autoWidth": false,
            "ajax": {
                "url": "/Report/GetActividades",
                "data": {
                    "empleadoId": function () { return empleadoId },
                    "fecha": function () {
                        if (fecha.length <= 5) {
                            fecha = '1900-01-01';
                        }
                        return fecha
                    },
                    "edificioId": function () { return IdEdificio },
                    "unidadId": function () { return IdUnidad },
                    "tipo": function () { return tipo },
                    "areaId": function () { return areaId }
                }
            },
            "ajax.dataSrc": "",
            "ajax.dataSrc": "",
            "columns": [
                { "data": "Fecha", "autoWidth": true },
                //{ "data": "Hora", "autoWidth": true },
                { "data": "Empleado", "autoWidth": true },
                { "data": "Edificio", "autoWidth": true },
                { "data": "Unidad", "autoWidth": true },
                {
                    "data": "Tipo", "autoWidth": true,
                    "createdCell": function (td, cellData, rowData, row, col) { $(td).attr("title", rowData.ComentariosEmp); }
                },
                { "data": "TipoMtto", "autoWidth": true },
                { "data": "Estatus", "autoWidth": true },
                { "data": "Programado", "autoWidth": true },                
                { "data": "pathIni", "autoWidth": true },
                { "data": "path", "autoWidth": true }
            ],
            "order": [0],
            "columnDefs": [
                {
                    "targets": [0],
                    "orderable": false,
                },
                {
                    "targets": 8,
                    render: function (data, type, row, meta) {
                        if (type === 'display') {
                            if (data.length > 0)
                                data = '<a href="' + data + '" target="_blank">Imagen</a>';
                        }
                        return data;
                    }
                },
                {
                    "targets": 9,
                    render: function (data, type, row, meta) {
                        if (type === 'display') {
                            if (data.length > 0)
                                data = '<a href="' + data + '" target="_blank">Imagen</a>';
                        }
                        return data;
                    }
                }
            ]
        });
    }
   

    $('#fechaactividad').datepicker();
    $('#fechaactividad').on('changeDate', function (ev) {
        $(this).datepicker('hide');
        fecha = $(this).val();        
    });

    $("#empleado").select2({
        ajax: {
            url: '/Report/GetEmpleados',
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
            var text = 'Todos';
            var data = { id: id, text: text };
            callback(data);
        }
    });

    $('#empleado').change(function () {
        empleadoId = $(this).val();
    });

    $("#edificio").select2({
        ajax: {
            url: '/Report/GetEdificios',
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
            var text = 'Todos';
            var data = { id: id, text: text };
            callback(data);
            IdUnidad = 0;
            IdEdificio = 0;            
        }
    });


    $('#edificio').change(function () {
        IdEdificio = $(this).val();    
        $("#unidad").val(0).trigger('change');    

    });

    $("#unidad").select2({

        ajax: {
            url: '/Report/GetUnidades',
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
            var text = 'Todos';
            var data = { id: id, text: text };
            callback(data);
            IdUnidad = 0;            
        }
    });

    $('#unidad').change(function () {
        IdUnidad = $(this).val();
    });

    $("#tipoactividades").select2({
        ajax: {
            url: '/Report/GetAreas',
            width: 'resolve',
            data: function (params) {
                return {
                    filtro: '1'
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
            var text = 'Todas';
            var data = { id: id, text: text };
            callback(data);
        }
    });

    $('#tipoactividades').change(function () {
        areaId = $(this).val();
    });

});