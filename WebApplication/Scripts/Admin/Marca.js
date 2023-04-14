

$(function () {

    var idMarca = '0';

    $(document).ready(function () {
        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-marcas');
        subMenuItem.addClass('active');

        $('#dvMsg').fadeOut(3000, function () {
            $(this).html("");
        });


        idMarca = $('#marca_id').val();

        if (idMarca == 0) {
            $('#activo').prop('checked', true);
        }


    });

});