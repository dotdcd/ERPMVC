

$(function () {

    var dias1 = '';
    var dias2 = '';
    var nombre = '';

    $(document).ready(function () {
        getData();
    });

    var myCallback = function () {
        var table = $('#example2').DataTable();
        $('#example2').DataTable().draw();
    };

    function getData() {
        var table = $('#example2').DataTable({
            "paging": true,
            "lengthChange": false,
            "ordering": true,
            "bFilter": false,
            "info": true,
            "autoWidth": false,
            "ajax": {
                "url": "/Admin/GetPagosVencidos",
                "data": {
                    "dias1": function () { return dias1 },
                    "dias2": function () { return dias2 },
                    "nombre": function () { return nombre }
                }
            },
            "ajax.dataSrc": "",
            "columns": [
                { "data": "IdContrato", "autoWidth": true },
                { "data": "userName", "autoWidth": true },
                { "data": "Email", "autoWidth": true },
                { "data": "edificioText", "autoWidth": true },
                { "data": "unidadText", "autoWidth": true },
                { "data": "fechaLimite", "autoWidth": true },
                { "data": "diasVencidos", "autoWidth": true }
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
                }
            ]
        });
    }


    $('#dias1').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            dias1 = $('#dias1').val();
            $('#example2').DataTable().ajax.reload(myCallback);
            return false;
        }
    });  
    $('#dias2').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            dias2 = $('#dias2').val();
            $('#example2').DataTable().ajax.reload(myCallback);
            return false;
        }
    }); 
    $('#nombre').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            nombre = $('#nombre').val();
            $('#example2').DataTable().ajax.reload(myCallback);
            return false;
        }
    }); 


    $("#btnSubmit").click(function () {
        var oTable = $('#example2').DataTable();

        $('#example2').submit();
        var row_data = oTable.rows().data();
        row_data = JSON.stringify(row_data.toArray());

        $.ajax({
            type: 'POST',
            url: '/Admin/sendReminderPago',
            data:
            {
                "data": row_data
            },
            success: function (result) {
                window.location.href = "/Admin/endSendReminder"
            }
        });
    });

});