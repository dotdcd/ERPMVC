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
            "url": "/Contabilidad/GetEmpleadosT",
        },
        "ajax.dataSrc": "",
        "columns": [
            { "data": "empleado_id", "autoWidth": true, "className": "cursor-pointer"},
            { "data": "empleado_paterno", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_materno", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "tipo_indirecto_id", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_telefono", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_imss", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_direccion", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_sueldo", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_sueldo_imss", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_cuenta_deposito", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_rfc", "autoWidth": true, "className": "cursor-pointer" ],
            { "data": "empleado_curp", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_nacimiento", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_centrodecostos_id", "autoWidth": true, "className": "cursor-pointer" }
            { "data": "empleado_puesto_id", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_periodo_id", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_empresa_id", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_sexo_id", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_estado_civil_id", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_estatus_baja", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "empleado_perfil_app", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "sucursal_id", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "tipo_indirecto_id", "autoWidth": true, "className": "cursor-pointer" }],
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
        var Id = data.empleado_id;
        var url = urlEmpleado + '?Id=' + Id;
        window.location.href = url;

    });

    $("#btnAgregar").click(function () {
        window.location.href = '/Admin/Empleado?id=0';
    });

});