/**
 * The focusInput directive also solves issues with focussing inputs on mobile devices!
 */

import Vue from "vue";

Vue.directive('focus-input', {
    bind(el, binding, vnode) {

        let $input = document.querySelector(binding.value);

        el.addEventListener('click', () => {

            let timeout = 100;

            if ($input) {
                var __tempEl__ = document.createElement('input');
                __tempEl__.style.position = 'fixed';
                __tempEl__.style.top = ($input.offsetTop + 7) + 'px';
                __tempEl__.style.left = $input.offsetLeft + 'px';
                __tempEl__.style.height = 1;
                __tempEl__.style.opacity = 0;
                document.body.appendChild(__tempEl__);
                __tempEl__.focus();
                setTimeout(function () {
                    $input.focus();
                    $input.click();
                    document.body.removeChild(__tempEl__);
                }, timeout);
            }

        });
    }
});
