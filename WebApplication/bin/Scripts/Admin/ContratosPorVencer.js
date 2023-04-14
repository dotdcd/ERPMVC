

$(function () {

    var dias1 = '';
    var dias2 = '';

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
            "info": true,
            "bFilter": false,
            "autoWidth": false,
            "ajax": {
                "url": "/Admin/GetContratosPorVencer",
                "data": {
                    "dias1": function () { return dias1 },
                    "dias2": function () { return dias2 }
                }
            },
            "ajax.dataSrc": "",
            "columns": [
                { "data": "IdContrato", "autoWidth": true },
                { "data": "userName", "autoWidth": true },
                { "data": "Email", "autoWidth": true },
                { "data": "edificioText", "autoWidth": true },
                { "data": "unidadText", "autoWidth": true },
                { "data": "fechaInicio", "autoWidth": true },
                { "data": "fechaFin", "autoWidth": true },
                { "data": "diasVence", "autoWidth": true }
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


    $("#btnSubmit").click(function () {
        var oTable = $('#example2').DataTable();

        $('#example2').submit();
        var row_data = oTable.rows().data();
        row_data = JSON.stringify(row_data.toArray());

        $.ajax({
            type: 'POST',
            url: '/Admin/sendReminder',
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