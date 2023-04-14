

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
        "responsive": true,
        "autoWidth": false,
        "ajax": "/Admin/GetSolicitudesAut",        
        "ajax.dataSrc": "",
        "columns": [            
            { "defaultContent": "<button>Contrato</button>", "autoWidth": true },            
            { "data": "userName", "autoWidth": true },
            { "data": "Email", "autoWidth": true },
            { "data": "edificioText", "autoWidth": true },
            { "data": "unidadText", "autoWidth": true },
            { "data": "fecha_inicio", "autoWidth": true },
            { "data": "periodo", "autoWidth": true },
            { "data": "fechaAlta", "autoWidth": true },
            { "data": "tipo", "autoWidth": true },
            { "data": "pathDocument", "autoWidth": true },
            { "data": "idSolicita", "autoWidth": true },
            { "data": "idContrato", "autoWidth": true }

        ],
        "order": [5],
        "columnDefs": [{
            "targets": [0],
            "orderable": false,
        },
        {
            "targets": [8],
            "visible": false,
            "searchable": false
            },
            {
                "targets": [10],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [11],
                "visible": false,
                "searchable": false
            },

            {
                "targets": 0, // your case first column
                "className": "text-center",
                "width": "70px"
            },
            {
                "targets": 9,
                render: function (data, type, row, meta) {
                    if (type === 'display') {
                        if (data.length > 0)
                            data = '<a href="' + data + '" target="_blank">Abrir</a>';
                    }
                    return data;
                }
            }
        ]
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

});