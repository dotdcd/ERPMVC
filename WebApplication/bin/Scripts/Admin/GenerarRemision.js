$(function () {    

    var mes = '';
    var inquilino = '0';
    var table;

    $(document).ready(function () {
        
    });

    var myCallback = function () {
        table = $('#example2').DataTable();
        $('#example2').DataTable().draw();
    };

    function getData() {
        table = $('#example2').DataTable({
            "paging": true,
            "lengthChange": false,
            "ordering": true,
            "info": true,
            "bFilter": false,
            "autoWidth": false,
            "ajax": {
                "url": "/Admin/GetRemisionesGenerar",
                "data": {
                    "mes": function () { return mes },
                    "inquilino": function () { return inquilino }
                }
            },
            "ajax.dataSrc": "",
            "columns": [
                { "data": "IdRemision", "autoWidth": true },
                { "data": "Edificio", "autoWidth": true },
                { "data": "Unidad", "autoWidth": true },
                { "data": "Nombre", "autoWidth": true },
                //{ "data": "Email", "autoWidth": true },
                { "data": "Mes", "autoWidth": true },
                { "data": "Periodo", "autoWidth": true },
                { "data": "Monto", "autoWidth": true },
                { "data": null, "autoWidth": true }
            ],            
            "order": [5],            
            "columnDefs": [
                {
                    "targets": [0],
                    "orderable": false,
                },
                {
                    "targets": [0],
                    "visible": false,
                    "searchable": false
                },
                {
                    "targets": [7],
                    "checkboxes": { "selectRow": true },
                    "className": "text-center"
                }
            ],            
            "select": {
                "style": 'multi'
            }
        });
    }
        

    $("#mes").select2({
        ajax: {
            url: '/Admin/GetMeses',
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
            var id = $('#currentPeriod').val();
            var text = $('#currentPeriodText').val();
            var data = { id: id, text: text };
            callback(data);            
            mes = id;
            getData();
        }
    });

    $('#mes').change(function () {
        mes = $(this).val();
        $('#example2').DataTable().ajax.reload(myCallback);
    }); 


    $("#usuario").select2({
        ajax: {
            url: '/Admin/GetInquilinos',
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
        }
    });

    $('#usuario').change(function () {
        inquilino = $(this).val();
        $('#example2').DataTable().ajax.reload(myCallback);
    }); 

    $("#btnSubmit").click(function () {

        var row_data = [];        
        var ids = $.map(table.rows('.selected').data(), function (item) {
            row_data.push(item);
        });

        //alert(JSON.stringify(row_data));
        //return;         

        $.ajax({
            type: 'POST',
            url: '/Admin/generaRemision',
            data:
            {
                "data": JSON.stringify(row_data)
            },
            success: function (result) {
                window.location.href = "/Admin/endGeneraRemision"
            }
        });
    });
   
});