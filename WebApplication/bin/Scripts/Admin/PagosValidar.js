

$(function () {

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
                "url": "/Admin/GetPagosValidar"
            },
            "ajax.dataSrc": "",
            "columns": [
                { "data": "IdRemision", "autoWidth": true },
                { "data": "UserName", "autoWidth": true },
                { "data": "Periodo", "autoWidth": true },
                { "data": "Edificio", "autoWidth": true },
                { "data": "Unidad", "autoWidth": true },
                { "data": "fechaReportado", "autoWidth": true },
                { "data": "Importe", "autoWidth": true },
                {
                    "data": "PathFile", "autoWidth": true, "className": 'text-center' },
                {
                    "data": "Validar",
                    "render": function (data, type, row) {
                        if (type === 'display') {
                            return '<input type="checkbox" value="' + row.IdRemision + '" class="editor-active">';
                        }
                        return data;
                    },
                    className: 'text-center'
                }
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
                    "targets": 7,
                    "render": function (data, type, row, meta) {
                        if (type === 'display') {
                            data = '<a href="' + data + '" target="_blank">Ver</a>';
                        }
                        return data;
                    }
                }
            ],
            "rowCallback": function (row, data) {
                // Set the checked state of the checkbox in the table
                $('input.editor-active', row).prop('checked', data.active == 1);
            }
        });
    }


    $('#example2').on('change', 'input.editor-active', function () {        
        var idRemision = this.value;
        $.ajax({
            type: 'POST',
            url: '/Admin/ValidaPago',
            data:
            {
                "id": idRemision
            },
            success: function (result) {
                window.location.reload();
            }
        });

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