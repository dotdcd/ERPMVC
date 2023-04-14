$(function () {

    var idEmpresa = '0';

    $(document).ready(function () {
        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-multiempresa');
        subMenuItem.addClass('active');

        idEmpresa = $('#empresa_id').val();

        if (idEmpresa == 0) {
            $('#activo').prop('checked', true);
        }


    });

});