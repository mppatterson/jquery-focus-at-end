/*
 * Focus at the end of an input element.
 * Thanks to ChrisG at http://stackoverflow.com/a/4609476
 */
$.fn.focus_at_end = function(){
    var input = this[0];
    var length = input.value.length;
    // For IE Only
    if (document.selection) {
        // Set focus
        input.focus();
        // Use IE Ranges
        var selection = document.selection.createRange();
        // Reset position to 0 & then set at end
        selection.moveStart('character', -length);
        selection.moveStart('character', length);
        selection.moveEnd('character', 0);
        selection.select();
    }
    else if (input.selectionStart || input.selectionStart == 0) {
        // Firefox/Chrome
        input.selectionStart = length;
        input.selectionEnd = length;
        input.focus();
    }
};
