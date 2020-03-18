export function toHHMMSS(seconds, showHH = true, showMM = true, showSS = true) {

    let sec_num = parseInt(seconds, 10);
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    let formattedSeconds = null;

    if(showHH){
        formattedSeconds = hours;
    }
    if(showMM){
        if(formattedSeconds){
            formattedSeconds = formattedSeconds + ':' + minutes;
        } else {
            formattedSeconds = minutes;
        }
    }
    if(showSS){
        if(formattedSeconds){
            formattedSeconds = formattedSeconds + ':' + seconds;
        } else {
            formattedSeconds = seconds;
        }
    }

    return formattedSeconds;

}