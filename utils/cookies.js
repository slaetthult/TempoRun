export function getCookieValueOf(name) {

    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }

    return null;

}

export function setCookie(name, value){

    document.cookie = name + '='+ value +'; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';

}

export function deleteCookie(name) {

    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';

}