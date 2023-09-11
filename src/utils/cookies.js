export function getCookieValueOf(name) {

    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }

    return null;

}

export function setCookie(name, value, days = 30){

    let date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toUTCString();
    } else {
        expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";

}

export function deleteCookie(name) {

    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';

}