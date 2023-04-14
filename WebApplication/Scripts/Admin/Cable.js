

$(function () {

    var idCable = '0';

    $(document).ready(function () {
        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-cables');
        subMenuItem.addClass('active');

        idCable = $('#cable_id').val();

        if (idCable == 0) {
            $('#activo').prop('checked', true);
        }
    });


    function cargarFechaActual() {
        // Obtener la fecha actual
        const fechaActual = new Date().toISOString().slice(0, 10);

        // Obtener el input de tipo fecha
        const inputFecha = document.getElementById('input-fecha');
        const inputFecha2 = document.getElementById('input-fecha2');
        // Establecer el valor del input con la fecha actual
        inputFecha.value = fechaActual;
        inputFecha2.value = fechaActual;
    }

    //window.addEventListener('load', cargarFechaActual);


});