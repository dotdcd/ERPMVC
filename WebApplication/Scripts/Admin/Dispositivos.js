$(function () {
    console.log('asdadsdsa')
    $(document).ready(function () {

        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-dispositivos');
        subMenuItem.addClass('active');

        $('#dataTbl').DataTable().ajax.reload(myCallback);
        
    });

    var myCallback = function () {
        $('#dataTbl').DataTable().draw();
    };

    var table = $('#dataTbl').DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: ':visible'
                }
            }
        ],
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
        "ajax": {
            "url": "/Admin/GetDispositivos",
        },
        "ajax.dataSrc": "",
        "columns": [
            
            { "data": "descripcion", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "clave", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "rendimiento_hr", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "rendimiento_min", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "familia_id", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cable_idA", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cable_idB", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "dispositivo_estatus_baja", "autoWidth": true, "className": "cursor-pointer" }
            
        ],
        "order": [[0, "asc"]],
        "columnDefs": [
        ]
    });

    $('#dataTbl tbody').on('click', 'td', function () {
        index = table.cell(this).index().columnVisible;
        var data = table.row($(this).parents('tr')).data();
        var Id = data.dispositivo_id;
        var url = "/Admin/Dispositivo" + '?Id=' + Id;
        window.location.href = url;

    });

    $("#btnAgregar").click(function () {
        window.location.href = '/Admin/Dispositivo?id=0';
    });

});