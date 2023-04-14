$(function () {

    var idSucursal = '0';

    $(document).ready(function () {
        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-sucursales');
        subMenuItem.addClass('active');

        idSucursal = $('#sucursal_id').val();

        if (idSucursal == 0) {
            $('#activo').prop('checked', true);
        }


    });

});