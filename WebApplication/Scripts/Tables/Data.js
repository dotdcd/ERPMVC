

$(function () {
    /*$('#example1').DataTable();
    $('#example2').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": true,
        "autoWidth": false
    });*/


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
        "ajax": "/Solicitud/GetSolicitudes",        
        "ajax.dataSrc": "",
        "columns": [            
            { "defaultContent": "<button>Revisar</button>", "autoWidth": true },            
            { "data": "userName", "autoWidth": true },
            { "data": "Email", "autoWidth": true },
            { "data": "edificioText", "autoWidth": true },
            { "data": "unidadText", "autoWidth": true },
            { "data": "fecha_inicio", "autoWidth": true },
            { "data": "periodo", "autoWidth": true },
            { "data": "fechaAlta", "autoWidth": true },
            { "data": "tipo", "autoWidth": true },
            { "data": "idSolicita", "autoWidth": true }
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
                "targets": [9],
                "visible": false,
                "searchable": false
            },
        {
            "targets": 0, // your case first column
            "className": "text-center",
            "width": "70px"
        }
        ]
    });  

    $('#example2 tbody').on('click', 'button', function () {
        // debugger;
        var data = table.row($(this).parents('tr')).data();
        var idSolicita = data.idSolicita; 
        var url = '';
        if (data.userName.includes('(Renovacion)')) {
            url = '/Solicitud/SolicitudRenVal?id=' + idSolicita;  
        }
        else  if (data.tipo == 'Estudiante') {
            url = '/Solicitud/SolicitudEstVal?id=' + idSolicita;  
        }
        else {
            url = '/Solicitud/SolicitudProfVal?id=' + idSolicita;
        }
        window.location.href = url;
    });

});