$(function () {


    var idProveedor = '0';
    var tipo_proveedor = 0;

    $(document).ready(function () {
        var menuItem = $('#left-sidebar-menu-administracion');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-proveedores');
        subMenuItem.addClass('active');

        idProveedor = $('#proveedor_id').val();
        tipo_proveedor = $('#proveedor_tipo_id').val();

        if (idProveedor == 0) {
            $('#ActivoChk').prop('checked', true);
        }
        

        $.ajax({
            url: urlGetTiposProveedor,
            type: 'POST',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#proveedor_tipo").select2({
                data: response.items,
            });
            $('#proveedor_tipo').val(tipo_proveedor);
            $('#proveedor_tipo').select2().trigger('change');
        });

    })

    $('#proveedor_tipo').change(function () {
        tipo_proveedor = $(this).val();
        $('#proveedor_tipo_id').val(tipo_proveedor);
    });

})