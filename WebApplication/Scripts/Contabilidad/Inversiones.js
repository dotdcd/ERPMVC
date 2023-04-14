$(function () {

    $(document).ready(function () {

        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-inversiones');
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
            "url": "/Contabilidad/GetInversiones",
        },
        "ajax.dataSrc": "",
        "columns": [
            { "data": "inversion_clave", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "inversion_descripcion", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "inversion_estatus_baja", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "inversion_id", "autoWidth": true, "className": "cursor-pointer" }
            
        ],
        "order": [1],
        "columnDefs": [
            {
                "targets": [3],
                "visible": false
            }
        ]
    });

    $('#dataTbl tbody').on('click', 'td', function () {
        index = table.cell(this).index().columnVisible;
        var data = table.row($(this).parents('tr')).data();
        var Id = data.inversion_id;
        var url = "/Contabilidad/Inversion" + '?Id=' + Id;
        window.location.href = url;

    });

    $("#btnAgregar").click(function () {
        window.location.href = '/Cobtabilidad/Inversion?id=0';
    });

});