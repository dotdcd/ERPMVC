
$(function () {    

    $(document).ready(function () {

        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-marcas');
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
            "url": urlGetMarcas,
        },
        "ajax.dataSrc": "",
        "columns": [
            { "data": "marca_descripcion", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "marca_estatus_baja", "autoWidth": true, "className": "cursor-pointer" },
            { "data": "marca_id", "autoWidth": true, "className": "cursor-pointer" }
        ],
        "order": [[0, "asc"]],
        "columnDefs": [
            {
                "targets": [2],
                "visible": false
            }
        ]
    });
    
    $('#dataTbl tbody').on('click', 'td', function () {
        index = table.cell(this).index().columnVisible;
        var data = table.row($(this).parents('tr')).data();
        var Id = data.marca_id;
        var url = urlMarca + '?Id=' + Id;
        window.location.href = url;

    });

    $("#btnAgregar").click(function () {
        window.location.href = '/Admin/Marca?id=0';
    });

});