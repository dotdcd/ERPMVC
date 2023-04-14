
$(function () {

    $(document).ready(function () {

        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-PPMBuscar');
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
            "url": urlGetProveedores, //Falta el url
        },
        "ajax.dataSrc": "",
        "columns": [
            { "data": "proveedoresxmarca_proveedor_id", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "proveedoresxmarca_marca_id", "autoWidth": true, "className": "cursor-pointer" },
        ],
        "order": [[1, "asc"]],
        "columnDefs": [
            {
                "targets": [],
                "visible": false
            }
        ]
    });

    $('#dataTbl tbody').on('click', 'td', function () {
        index = table.cell(this).index().columnVisible;
        var data = table.row($(this).parents('tr')).data();
        var Id = data.proveedor_id;
        var url = urlProvedoor + '?Id=' + Id;
        window.location.href = url;

    });

    $("#btnAgregar").click(function () {
        window.location.href = '/Admin/PPMNuevo?id=0';
    });

});