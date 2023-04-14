$(function () {
    $(document).ready(function () {
        var menuItem = $('#left-sidebar-menu-administracion');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-PPMBuscar');
        subMenuItem.addClass('active');
        idProveedor = $('#proveedoresxmarca_proveedor_id').val();
        if (idProveedor == 0) {
            $('#activo').prop('checked', true);
        }

        $.ajax({
            type: "GET",
            url: "/Admin/GetPTipos",  // falta la ruta
            success: function (data) {
                console.log(data)
                var sel = $("#proveedoresxmarca_proveedor_id");
                sel.empty();
                for (var i = 0; i < data.data.length; i++) {
                    console.log(data)
                    sel.append('<option value="' + data.data[i].proveedortipo_id + '">' + data.data[i].proveedortipo_descripcion + '</option>');
                }
            }
        });
    })
})