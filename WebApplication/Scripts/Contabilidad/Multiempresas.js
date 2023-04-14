$(function () {

    $(document).ready(function () {

        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-empresas');
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
            "url": "/Contabilidad/GetEmpresas",
        },
        "ajax.dataSrc": "",
        "columns": [
            { "data": "empresa_id", "autoWidth": true, "className": "cursor-pointer"},
            { "data": "empresa_razon_social", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empresa_direccion", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empresa_colonia", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empresa_ciudad_estado", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empresa_rfc", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empresa_telefono", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empresa_registro_patronal", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empresa_estatus_baja", "autoWidth": true, "className": "cursor-pointer" }        ],
        "order": [1],
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
        var Id = data.empresa_id;
        var url = urlMultiempresa + '?Id=' + Id;
        window.location.href = url;

    });

    $("#btnAgregar").click(function () {
        window.location.href = '/Admin/Multiempresa?id=0';
    });

});