
$(function () {

    $(document).ready(function () {

        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-familia');
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
            "url": "/Admin/GetDisciplinas",
        },
        "ajax.dataSrc": "",
        "columns": [
            { "data": "familia_id", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "familia_descripcion", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "familia_clave", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "familia_estatus_baja", "autoWidth": true, "className": "cursor-pointer" }
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
        var Id = data.familia_id;
        var url = "/Admin/Disciplina" + '?Id=' + Id;
        window.location.href = url;

    });

    $("#btnAgregar").click(function () {
        window.location.href = '/Admin/Disciplina?id=0';
    });

});