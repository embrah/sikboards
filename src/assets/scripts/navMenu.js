$(document).ready(function() {
    $('img').on('click', function() {
        var checked = $('.toggle').prop('checked');
        if (!checked) {
            $('.toggle').prop('checked', true);
        } else {
            $('.toggle').prop('checked', false);
        }
    }); //end click
}); //end ready
