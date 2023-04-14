$(function () {

    var idEmpleado = '0';
    var tipo_emplados = 0;
    var centro_de_costos = 0;
    var sucursal = 0;
    var puesto = 0;
    var periodo = 0;
    var empresa = 0;
    var sexo = 0;
    var estado_civil = 0;
    var perfilApp = 0;
    var tipo_indirecto = 0;

    $(document).ready(function () {
        var menuItem = $('#left-sidebar-menu-dashboard');
        menuItem.addClass('active');
        var subMenuItem = menuItem.find('#left-sidebar-menu-dashboard-empleados');
        subMenuItem.addClass('active');

        idEmpleado = $('#empleado_id').val();
        tipo_emplados = $('#empleado_actividad_tipo').val();
        centro_de_costos = $('#empleado_centrodecostos_id').val();
        sucursal = $('#sucursal_id').val();
        puesto = $('#empleado_puesto_id').val();
        periodo = $('#empleado_periodo_id').val();
        empresa = $('#empleado_empresa_id').val();
        sexo = $('#empleado_sexo_id').val();
        estado_civil = $('#empleado_estado_civil_id').val();
        perfilApp = $('#empleado_perfil_app').val();
        tipo_indirecto = $('#tipo_indirecto_id').val();


        if (idEmpleado == 0) {
            $('#activo').prop('checked', true);
        }

        $.ajax({
            url: "/Contabilidad/GetTiposEmpleados",
            type: 'POST',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#actividad").select2({
                data: response.items,
            })
            $('#actividad').val(tipo_emplados);
            $('#actividad').select2().trigger('change')
        });

        $.ajax({
            url: "/Contabilidad/GetCentroDeCostos",
            type: 'GET',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#centro_costos").select2({
                data: response.items,
            })
            $('#centro_costos').val(centro_de_costos);
            $('#centro_costos').select2().trigger('change')
        });

        $.ajax({
            url: "/Contabilidad/GetSucursales",
            type: 'GET',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#sucursal").select2({
                data: response.items,
            })
            $('#sucursal').val(sucursal);
            $('#sucursal').select2().trigger('change')
        });

        $.ajax({
            url: "/Contabilidad/GetPuestos",
            type: 'GET',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#puesto").select2({
                data: response.items,
            })
            $('#puesto').val(puesto);
            $('#puesto').select2().trigger('change')
        });

        $.ajax({
            url: "/Contabilidad/GetPeriodos",
            type: 'GET',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#periodo").select2({
                data: response.items,
            })
            $('#periodo').val(periodo);
            $('#periodo').select2().trigger('change')
        });

        $.ajax({
            url: "/Contabilidad/GetEmpresasList",
            type: 'GET',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#empresa").select2({
                data: response.items,
            })
            $('#empresa').val(empresa);
            $('#empresa').select2().trigger('change')
        });

        $.ajax({
            url: "/Contabilidad/GetSexo",
            type: 'GET',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#sexo").select2({
                data: response.items,
            })
            $('#sexo').val(sexo);
            $('#sexo').select2().trigger('change')
        });

        $.ajax({
            url: "/Contabilidad/GetEstadoCivil",
            type: 'GET',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#estado_civil").select2({
                data: response.items,
            })
            $('#estado_civil').val(estado_civil);
            $('#estado_civil').select2().trigger('change')
        });

        $.ajax({
            url: "/Contabilidad/GetPerfilApp",
            type: 'GET',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#perfil_app").select2({
                data: response.items,
            })
            $('#perfil_app').val(perfilApp);
            $('#perfil_app').select2().trigger('change')
        });

        $.ajax({
            url: "/Contabilidad/GetTiposIndirecto",
            type: 'GET',
            contentType: 'application/json; charset=utf-8'
        }).then(function (response) {
            $("#tipo_indirecto").select2({
                data: response.items,
            })
            $('#tipo_indirecto').val(tipo_indirecto);
            $('#tipo_indirecto').select2().trigger('change')
        });
    });

    $('#actividad').change(function () {
        tipo_emplados = $(this).val();
        $('#empleado_actividad_tipo').val(tipo_emplados);
    });

    $('#centro_costos').change(function () {
        centro_de_costos = $(this).val();
        $('#empleado_centrodecostos_id').val(centro_de_costos);
    });

    $('#sucursal').change(function () {
        sucursal = $(this).val();
        $('#sucursal_id').val(sucursal);
    });

    $('#puesto').change(function () {
        puesto = $(this).val();
        $('#empleado_puesto_id').val(puesto);
    });

    $('#periodo').change(function () {
        periodo = $(this).val();
        $('#empleado_periodo_id').val(periodo);
    });

    $('#empresa').change(function () {
        empresa = $(this).val();
        $('#empleado_empresa_id').val(empresa);
    });

    $('#sexo').change(function () {
        sexo = $(this).val();
        $('#empleado_sexo_id').val(sexo);
    });

    $('#estado_civil').change(function () {
        estado_civil = $(this).val();
        $('#empleado_estado_civil_id').val(estado_civil);
    });

    $('#perfil_app').change(function () {
        perfilApp = $(this).val();
        $('#empleado_perfil_app').val(perfilApp);
    });

    $('#tipo_indirecto').change(function () {
        tipo_indirecto = $(this).val();
        $('#tipo_indirecto_id').val(tipo_indirecto);
    });

});