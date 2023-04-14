$(function () {

    var idInversion = '0';

    $(document).ready(function () {
        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-inversion');
        subMenuItem.addClass('active');

        idInversion = $('#inversion_id').val();

        if (idInversion == 0) {
            $('#activo').prop('checked', true);
        }


    });

});