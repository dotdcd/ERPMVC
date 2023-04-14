

$(function () {

    $(document).ready(function () {
        $('#dvMsg').fadeOut(5000, function () {
            $(this).html(""); //reset label after fadeout
        });
    });   

    var table = $('#example2').DataTable({
        "paging": true,
        "lengthChange": false,
        "oSearch": { "bSmart": false },
        "language": {
            "search": "Buscar:"
        },
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "ajax": "/Admin/GetEstatusReportes",
        "ajax.dataSrc": "",
        "columns": [            
            { "data": "IdReporte", "autoWidth": true },
            { "data": "FechaReporte", "autoWidth": true },
            { "data": "Unidad", "autoWidth": true },
            { "data": "Tipo", "autoWidth": true },
            { "data": "Estatus", "autoWidth": true },
            {
                "data": "Comentarios", "autoWidth": true,
                "createdCell": function (td, cellData, rowData, row, col) { $(td).attr("title", rowData.Comentarios); }
            },            
            {
                "data": "PathFoto", "autoWidth": true
            },
            {
                data: null, render: function (data, type, row) {
                    // Combine the first and last names into a single table field
                    return "Cancelar";
                }
            }
        ],
        "order": [0],
        "columnDefs": [{
            "targets": [0],
            "orderable": false,
        },        
            {
            "targets": 0, // your case first column
            "className": "text-center",
            "width": "70px"
            },
            {
                "targets": 6,
                render: function (data, type, row, meta) {
                    if (type === 'display') {
                        if (data != 'NA') {
                            data = '<a href="' + data + '" target="_blank">Abrir</a>';
                        }
                        else {
                            data = 'Sin Imagen';
                        }
                    }
                    return data;
                }
            }
        ]
    });    

    $('#example2 tbody').on('click', 'td', function () {
        // debugger;
        index = table.cell(this).index().columnVisible;

        var data = table.row($(this).parents('tr')).data();
        var IdReporte = data.IdReporte;

        if (index != 7 && index != 6) {            
            var url = '';
            url = '/Admin/AsignarActividad?id=' + IdReporte;
            window.location.href = url;
        }
        else if (index == 7){
            if (confirm('Desea cancelar este reporte?')) {
                var id_reporte = IdReporte;
                $.ajax({
                    type: "POST",
                    url: '/Admin/CancelarReporte',
                    data: { idReporte: id_reporte },
                    success: function (data) {
                        window.location.href = '/Admin/EstatusReportes';
                    }
                });
            }
        }        

    });
    
});