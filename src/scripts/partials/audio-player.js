import {toHHMMSS} from '@scripts/utils/toHHMMSS.js';

export const audioPlayer = {
    vars: {
        componentQuery:                     '*[data-js=audio-player]',
        playQuery:                          '*[data-audio-player-trigger-play]',
        pauseQuery:                         '*[data-audio-player-trigger-pause]',
        progressBarQuery:                   '*[data-audio-player-progress-bar]',
        progressBarActiveQuery:             '*[data-audio-player-progress-bar-active]',
        audioQuery:                         '*[data-audio-player-toggle-audio]',
        currentTimeQuery:                   '*[data-audio-player-current-time]',
        totalTimeQuery:                     '*[data-audio-player-total-time]',

        intervalProgress:                   '',

        isPlayingClass:                     'audio-player--is-playing'
    },
    init(){

        audioPlayer.find();

    },

    find(){

        const $audioPlayers = document.querySelectorAll(audioPlayer.vars.componentQuery);

        if($audioPlayers.length === 0){
            return false;
        }

        for(const $audioPlayer of $audioPlayers){

            audioPlayer.setInitialValues($audioPlayer);
            audioPlayer.addEventTrigger($audioPlayer);

        }

    },

    setInitialValues($audioPlayer){

        const $audio = $audioPlayer.querySelector('audio');
        const $totalTime = $audioPlayer.querySelector(audioPlayer.vars.totalTimeQuery);

        $totalTime.innerHTML = toHHMMSS($audio.duration, false);

        $audio.onloadedmetadata = () => {

            $totalTime.innerHTML = toHHMMSS($audio.duration, false);

        };
    },

    addEventTrigger($audioPlayer){

        const $playButton = $audioPlayer.querySelector(audioPlayer.vars.playQuery);

        $playButton.addEventListener('click', () => {
            audioPlayer.play($audioPlayer);
        });

        const $pauseButton = $audioPlayer.querySelector(audioPlayer.vars.pauseQuery);

        $pauseButton.addEventListener('click', () => {
            audioPlayer.pause($audioPlayer);
        });

        const $progress = $audioPlayer.querySelector(audioPlayer.vars.progressBarQuery);

        $progress.addEventListener('click', (event) => {
            audioPlayer.goToTime($audioPlayer, event);
        });

    },

    play($audioPlayer){

        const $audioPlayers = document.querySelectorAll(audioPlayer.vars.componentQuery);

        for(const $audioPlayer of $audioPlayers){
            audioPlayer.pause($audioPlayer);
        }

        const $audio = $audioPlayer.querySelector('audio');
        $audioPlayer.classList.add(audioPlayer.vars.isPlayingClass);
        $audio.play();
        audioPlayer.updatePercentagePlayed($audioPlayer);

    },

    pause($audioPlayer){

        const $audio = $audioPlayer.querySelector('audio');
        $audioPlayer.classList.remove(audioPlayer.vars.isPlayingClass);
        $audio.pause();
        clearInterval(audioPlayer.vars.intervalProgress);

    },

    updatePercentagePlayed($audioPlayer){

        const $audio = $audioPlayer.querySelector('audio');
        const $progressBarActive = $audioPlayer.querySelector(audioPlayer.vars.progressBarActiveQuery);
        const $currentTime = $audioPlayer.querySelector(audioPlayer.vars.currentTimeQuery);

        audioPlayer.vars.intervalProgress = setInterval(() => {

            const duration = $audio.duration;
            const currentTime = $audio.currentTime;
            const percentagePlayed = (currentTime / duration) * 100;

            $progressBarActive.style.width = `${percentagePlayed}%`;
            $currentTime.innerHTML = toHHMMSS(currentTime, false);

            if (duration === currentTime) {
                audioPlayer.pause($audioPlayer);
            }

        }, 100);

    },

    goToTime($audioPlayer, event){

        const $audio = $audioPlayer.querySelector('audio');
        const $component = $audioPlayer.closest(audioPlayer.vars.componentQuery);

        const $gridWrap = $component.closest('.grid-wrap');
        const $progress = $component.querySelector(audioPlayer.vars.progressBarQuery);


        const progressWidth = $progress.offsetWidth;
        const duration = $audio.duration;
        const clickedPosition = event.clientX - $progress.offsetLeft  - $component.offsetLeft - $gridWrap.offsetLeft;
        const wishedSeconds = (clickedPosition / progressWidth) * duration;

        $audio.currentTime = wishedSeconds;

        audioPlayer.play($audioPlayer);

    }
}