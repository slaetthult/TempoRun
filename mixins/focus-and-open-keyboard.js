/**
 * Fix with mobile issues to open the keyboard if you focus an input via javascript
 */

export function focusAndOpenKeyboard(el, timeout) {
    if(!timeout) {
        timeout = 100;
    }
    if(el) {
        // Align temp input element approximately where the input element is
        // so the cursor doesn't jump around
        var __tempEl__ = document.createElement('input');
        __tempEl__.style.position = 'absolute';
        __tempEl__.style.top = (el.offsetTop + 7) + 'px';
        __tempEl__.style.left = el.offsetLeft + 'px';
        __tempEl__.style.height = 1;
        __tempEl__.style.opacity = 0;
        // Put this temp element as a child of the page <body> and focus on it
        document.body.appendChild(__tempEl__);
        __tempEl__.focus();

        // The keyboard is open. Now do a delayed focus on the target element
        setTimeout(function() {
            el.focus();
            el.click();
            // Remove the temp element
            document.body.removeChild(__tempEl__);
        }, timeout);
    }
}