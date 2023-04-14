
$(function () {

    $(document).ready(function () {

        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-clientes');
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
        "autoWidth": true,
        "ajax": {
            "url": "/Admin/GetClientes",
        },
        "ajax.dataSrc": "",
        "columns": [
            { "data": "cliente_id", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cliente_razon_social", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cliente_rfc", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cliente_calle", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cliente_colonia", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cliente_municipio", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cliente_estado", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cliente_codigo_postal", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cliente_telefono", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cliente_contacto", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cliente_email", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cliente_cobranza", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "cliente_estatus_baja", "autoWidth": true, "className": "cursor-pointer" }
        ],
        "order": [[1, "asc"]],
        "columnDefs": [
            {
                "targets": [0],
                "visible": false
            }
        ]
    });

    $('#dataTbl tbody').on('click', 'td', function () {
        index = table.cell(this).index().columnVisible;
        var data = table.row($(this).parents('tr')).data();

        var Id = data.cliente_id;
        var url = "/Admin/Cliente" + '?Id=' + Id;
        window.location.href = url;
        
    });

    $("#btnAgregar").click(function () {
        window.location.href = '/Admin/Cliente?id=0';
    });

});