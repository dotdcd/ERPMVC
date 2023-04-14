

$(function () {

    var idProject = '0';
    var idCustomer = '0';
    var idUserAssigned = '0';
    

    $(document).ready(function () {
        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-mylist');
        subMenuItem.addClass('active');

        idCustomer = $('#idCustomer').val();
        idUserAssigned = $('#idUserAssigned').val();        
        idProject = $('#idProject').val();

        if (idCustomer == '')
            idCustomer = '0';
        if (idProject == '')
            idProject = '0';
        if (idUserAssigned == '')
            idUserAssigned = '0';
        
        $.ajax({
            url: urlGetEmployees + '?includeAll=0',
            type: 'POST',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#usuario").select2({
                data: response.items
            });
            $("#usuario").val(idUserAssigned).trigger('change');
        });

        $.ajax({
            url: urlGetCustomers,
            type: 'POST',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#customer").select2({
                data: response.items
            });
            $("#customer").val(idCustomer).trigger('change');
        });

        getProjects();
    });

    function getProjects() {
        $.ajax({
            url: urlGetProjects + '?customerId=' + idCustomer,
            type: 'POST',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#proyecto").select2({
                data: response.items
            });
            $("#proyecto").val(idProject).trigger('change');
        });
    }

    $('#usuario').change(function () {
        idUserAssigned = $(this).val();
        $('#idUserAssigned').val(idUserAssigned);        
    });

    $('#proyecto').change(function () {
        idProject = $(this).val();
        $('#idProject').val(idProject);
    });

    $('#customer').change(function () {
        idCustomer = $(this).val();
        $('#idCustomer').val(idCustomer);

        getProjects();        
    });
   

});