
$(function () {

    var empleados;
    var semana = '0';

    $(document).ready(function () {
        $.ajax({
            type: 'POST',
            url: '/Admin/GetEmpleados',
            dataType: "json",
            async: false,
            success: function (data) {
                empleados = data.items;
            }
        });
        
    });

    $("#semana").select2({
        ajax: {
            url: '/Admin/GetSemanas',
            width: 'resolve',
            data: function (params) {
                return {
                    filtro: '1'
                };
            },
            processResults: function (data) {               
                return {                    
                    results: data.items
                };
            },
            minimumInputLength: 2,
            width: 'resolve'
        },
        initSelection: function (item, callback) {
            var id = $('#lastWeekId').val();
            var text = $('#lastWeek').val();
            var data = { id: id, text: text };
            callback(data);
            semana = id;
            getData();
        }
    });

    var myCallback = function () {
        var table = $('#weeks').DataTable();
        $('#weeks').DataTable().draw();
    };


    function getData() {
        var table = $('#example2').DataTable({
            "paging": true,
            "scrollX": true,
            "pageLength": 60,
            "lengthChange": false,
            "oSearch": { "bSmart": false },
            "language": {
                "search": "Buscar:"
            },
            "ordering": true,
            "info": true,
            "autoWidth": false,

            "ajax": {
                "url": "/Admin/GetProgramarLimpieza",
                "data": {
                    "yearsemana": function () { return semana }
                }
            },
            "ajax.dataSrc": "",
            "columns": [
                { "data": "Edificio", "autoWidth": true },
                { "data": "Unidad", "autoWidth": true },
                {
                    "data": "Lun", 
                    "render": function (d, t, r, meta) {
                        var $select = $("<select class='mySelect' data-col='" + meta.col + "' style='width:110px;'></select>", {
                            "id": r[0] + "start",
                            "value": d
                        });
                        $.each(empleados, function (k, v) {
                            var $option = $("<option></option>", {
                                "text": v.text,
                                "value": v.id
                            });
                            if (d === v.id) {
                                $option.attr("selected", "selected")
                            }
                            $select.append($option);
                        });
                        return $select.prop("outerHTML");
                    }
                },
                {
                    "data": "Mar", 
                    "render": function (d, t, r, meta) {
                        var $select = $("<select class='mySelect' data-col='" + meta.col + "' style='width:110px;'></select>", {
                            "id": r[0] + "start",
                            "value": d
                        });
                        $.each(empleados, function (k, v) {
                            var $option = $("<option></option>", {
                                "text": v.text,
                                "value": v.id
                            });
                            if (d === v.id) {
                                $option.attr("selected", "selected")
                            }
                            $select.append($option);
                        });
                        return $select.prop("outerHTML");
                    }
                },
                {
                    "data": "Mie", 
                    "render": function (d, t, r, meta) {
                        var $select = $("<select class='mySelect' data-col='" + meta.col + "' style='width:110px;'></select>", {
                            "id": r[0] + "start",
                            "value": d
                        });
                        $.each(empleados, function (k, v) {
                            var $option = $("<option></option>", {
                                "text": v.text,
                                "value": v.id
                            });
                            if (d === v.id) {
                                $option.attr("selected", "selected")
                            }
                            $select.append($option);
                        });
                        return $select.prop("outerHTML");
                    }
                },
                {
                    "data": "Jue", 
                    "render": function (d, t, r, meta) {
                        var $select = $("<select class='mySelect' data-col='" + meta.col + "' style='width:110px;'></select>", {
                            "id": r[0] + "start",
                            "value": d
                        });
                        $.each(empleados, function (k, v) {
                            var $option = $("<option></option>", {
                                "text": v.text,
                                "value": v.id
                            });
                            if (d === v.id) {
                                $option.attr("selected", "selected")
                            }
                            $select.append($option);
                        });
                        return $select.prop("outerHTML");
                    }
                },
                {
                    "data": "Vie", 
                    "render": function (d, t, r, meta) {
                        var $select = $("<select class='mySelect' data-col='" + meta.col + "' style='width:110px;'></select>", {
                            "id": r[0] + "start",
                            "value": d
                        });
                        $.each(empleados, function (k, v) {
                            var $option = $("<option></option>", {
                                "text": v.text,
                                "value": v.id
                            });
                            if (d === v.id) {
                                $option.attr("selected", "selected")
                            }
                            $select.append($option);
                        });
                        return $select.prop("outerHTML");
                    }
                },
                {
                    "data": "Sab", 
                    "render": function (d, t, r, meta) {
                        var $select = $("<select class='mySelect' data-col='" + meta.col + "' style='width:110px;'></select>", {
                            "id": r[0] + "start",
                            "value": d
                        });
                        $.each(empleados, function (k, v) {
                            var $option = $("<option></option>", {
                                "text": v.text,
                                "value": v.id
                            });
                            if (d === v.id) {
                                $option.attr("selected", "selected")
                            }
                            $select.append($option);
                        });
                        return $select.prop("outerHTML");
                    }
                },
                /*{
                    "data": "Dom",
                    "render": function (d, t, r, meta) {
                        var $select = $("<select class='mySelect' data-col='" + meta.col + "' style='width:110px;'></select>", {
                            "id": r[0] + "start",
                            "value": d
                        });
                        $.each(empleados, function (k, v) {
                            var $option = $("<option></option>", {
                                "text": v.text,
                                "value": v.id
                            });
                            if (d === v.id) {
                                $option.attr("selected", "selected")
                            }
                            $select.append($option);
                        });
                        return $select.prop("outerHTML");
                    }
                },*/
                { "data": "IdEdificio", "autoWidth": true },
                { "data": "IdUnidad", "autoWidth": true }

            ],
            "order": [0],
            "columnDefs": [
                {
                    "targets": [0],
                    "orderable": false,
                },
                {
                    "targets": [8],
                    "visible": false,
                    "searchable": false
                },
                {
                    "targets": [9],
                    "visible": false,
                    "searchable": false
                },
                {
                    "targets": 0,
                    "className": "text-center",
                    "width": "70px"
                },
                {
                    "targets": [2, 3, 4, 5, 6, 7],                    
                    "width": "100px"
                }
            ]
        });
    } 


    $('#example2').on('change', 'select.mySelect', function () {
        var oTable = $('#example2').DataTable();
        var colIndex = +$(this).data('col')
        var row = $(this).closest('tr')[0];
        //var data = oTable.row(row).data();       
        //data[colIndex] = this.value
        //data[colIndex] = $(this).find(':selected').text();        
        var cell = oTable.cell(row, colIndex);
        cell.data(this.value)
    });


    $('#semana').change(function () {
        semana = $(this).val();
        $('#example2').DataTable().ajax.reload(myCallback);
    }); 


    $("#btnSubmit").click(function () {
        var oTable = $('#example2').DataTable();

        $('#example2').submit();
        var row_data = oTable.rows().data();
        row_data = JSON.stringify(row_data.toArray());
        
        // Submit form data via ajax
        $.ajax({
            type: 'POST',
            //contentType: "application/json",
            //dataType: "json",       
            url: '/Admin/saveLimpieza',
            data:
            {
                "data": row_data
            },
            success: function (result) {
                window.location.href = "/Admin/endSaveLimpieza"
            }
        });
    });


});