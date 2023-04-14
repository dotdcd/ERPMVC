

$(function () {

    var idCliente = '0';

    $(document).ready(function () {
        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-cliente');
        subMenuItem.addClass('active');

        idMarca = $('#cliente_id').val();

        if (idCliente == 0) {
            $('#activo').prop('checked', true);
        }


    });

});