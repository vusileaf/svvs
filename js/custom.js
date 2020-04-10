$(document).ready(function() {
    function show_hide() {
        var content = '.more_content';
        var show_hide_button = '.show_hide';
        $(content).hide();
        $(show_hide_button).click(function() {
            if ($(content).is(":visible")) {
                $(this).text("Show more");
                $(content).hide();
            } else {
                $(this).text("Show less");
                $(content).show();
            }
        });
    }
    show_hide();

});