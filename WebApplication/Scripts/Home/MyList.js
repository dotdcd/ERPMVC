

$(function () {
    
    var from = 0;
    var to = 0;

    $(document).ready(function () {

        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-mylist');
        subMenuItem.addClass('active');

        from = moment(new Date()).add(-1, 'M').format('MM/DD/YYYY');
        to = moment(new Date()).format('MM/DD/YYYY');
        $('#from').datepicker('setDate', from);
        $('#to').datepicker('setDate', to);
        $('#dataTbl').DataTable().ajax.reload(myCallback);
    });

    $('#from').datepicker({
        autoclose: true,
        todayHighlight: true
    });

    $('#from').on('changeDate', function (ev) {
        $(this).datepicker('hide');
        from = $(this).val();
        $('#dataTbl').DataTable().ajax.reload(myCallback);
    });    

    $('#to').datepicker({
        autoclose: true,
        todayHighlight: true
    });

    $('#to').on('changeDate', function (ev) {
        $(this).datepicker('hide');
        to = $(this).val();
        $('#dataTbl').DataTable().ajax.reload(myCallback);
    });

    var myCallback = function () {
        $('#dataTbl').DataTable().draw();
    };

    //function getData() {
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
                "url": "/Home/GetMyList",
                "data": {
                    "dateIni": function () { return from },
                    "dateEnd": function () { return to }
                }
            },
            "ajax.dataSrc": "",
            "columns": [
                { "data": "IdTicket", "autoWidth": true, "className": "cursor-pointer" },
                { "data": "DescTicket", "autoWidth": true, "className": "cursor-pointer" },
                { "data": "NameProject", "autoWidth": true, "className": "cursor-pointer" },
                { "data": "DateTicket", "autoWidth": true, "className": "cursor-pointer" },
                { "data": "UserAssigned", "autoWidth": true, "className": "cursor-pointer" },
                { "data": "NameStatus", "autoWidth": true, "className": "cursor-pointer" }               
            ],
            /*"order": [1],*/
            "columnDefs": [
            ]
        });
    //}

    $('#dataTbl tbody').on('click', 'td', function () {
        index = table.cell(this).index().columnVisible;
        var data = table.row($(this).parents('tr')).data();
        var Id = data.IdTicket;
        var status = data.NameStatus;

        if (index == 5) {
            if (status == 'Asignado') {
                $("#modal-iniciar").modal("show");
            }
        }
        else {
            var url = urlSample + '?Id=' + Id;
            window.location.href = url;
        }
    });


});