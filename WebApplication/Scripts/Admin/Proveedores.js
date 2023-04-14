
$(function () {

    $(document).ready(function () {

        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-proveedores');
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
            "url": "/Admin/GetProveedores",
        },
        "ajax.dataSrc": "",
        "columns": [
            { "data": "proveedor_razon_social", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "proveedor_contacto", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "proveedor_contacto_email", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "proveedor_telefono", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "proveedor_direccion", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "proovedor_rfc", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "proveedor_web", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "proveedor_usuario_password", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "proveedor_dias_credito", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "proveedor_limite_credito", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "proveedor_tipo_id", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "proveedor_estatus_baja", "autoWidth": true, "className": "cursor-pointer" }
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
        var url = "/Admin/Proveedor" + '?Id=' + Id;
        window.location.href = url;

    });

    $("#btnAgregar").click(function () {
        window.location.href = '/Admin/Proveedor?id=0';
    });

});