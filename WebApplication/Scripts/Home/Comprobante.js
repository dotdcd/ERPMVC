$(function () {
    
    $(document).ready(function () {
       
    });

    $("#documento").select2({
        ajax: {
            url: '/Home/GetDocumentos',
            width: 'resolve',
            data: function (params) {
                return {
                    q: params.term// search term
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
            var id = item.val();
            var text = $('#documentotext').val();
            var data = { id: id, text: text };
            callback(data);
        }
    });

    $('#documento').change(function () {
        $('#documentotext').val($(this).val());
        $('#documentoId').val($(this).val());

    });

    $("input:file").change(function () {
        $('#comprobantetext').val($(this).val());
    });

});