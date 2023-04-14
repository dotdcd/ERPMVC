

$(function () {

    var idFamilia = '0';

    $(document).ready(function () {
        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-cliente');
        subMenuItem.addClass('active');

        idFamilia = $('#familia_id').val();

        if (idFamilia == 0) {
            $('#activo').prop('checked', true);
        }


    });

});