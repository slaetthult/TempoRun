import {toHHMMSS} from '@scripts/utils/toHHMMSS.js';

export const audioPlayer = {
    vars: {
        queries: {
            component:                     '*[data-js=audio-player]',
            play:                          '*[data-audio-player-trigger-play]',
            pause:                         '*[data-audio-player-trigger-pause]',
            progressBar:                   '*[data-audio-player-progress-bar]',
            progressBarActive:             '*[data-audio-player-progress-bar-active]',
            audio:                         '*[data-audio-player-toggle-audio]',
            currentTime:                   '*[data-audio-player-current-time]',
            totalTime:                     '*[data-audio-player-total-time]',
        },
        classes: {
            isPlaying:                     'audio-player--is-playing'
        },
        states: {
            intervalProgress:               '',
        }
    },
    init(){

        audioPlayer.find();

    },

    find(){

        const $audioPlayers = document.querySelectorAll(audioPlayer.vars.queries.component);

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
        const $totalTime = $audioPlayer.querySelector(audioPlayer.vars.queries.totalTime);

        $totalTime.innerHTML = toHHMMSS($audio.duration, false);

        $audio.onloadedmetadata = () => {

            $totalTime.innerHTML = toHHMMSS($audio.duration, false);

        };
    },

    addEventTrigger($audioPlayer){

        const $playButton = $audioPlayer.querySelector(audioPlayer.vars.queries.play);

        $playButton.addEventListener('click', () => {
            audioPlayer.play($audioPlayer);
        });

        const $pauseButton = $audioPlayer.querySelector(audioPlayer.vars.queries.pause);

        $pauseButton.addEventListener('click', () => {
            audioPlayer.pause($audioPlayer);
        });

        const $progress = $audioPlayer.querySelector(audioPlayer.vars.queries.progressBar);

        $progress.addEventListener('click', (event) => {
            audioPlayer.goToTime($audioPlayer, event);
        });

    },

    play($audioPlayer){

        const $audioPlayers = document.querySelectorAll(audioPlayer.vars.queries.component);

        for(const $audioPlayer of $audioPlayers){
            audioPlayer.pause($audioPlayer);
        }

        const $audio = $audioPlayer.querySelector('audio');
        $audioPlayer.classList.add(audioPlayer.vars.classes.isPlaying);
        $audio.play();
        audioPlayer.updatePercentagePlayed($audioPlayer);

    },

    pause($audioPlayer){

        const $audio = $audioPlayer.querySelector('audio');
        $audioPlayer.classList.remove(audioPlayer.vars.classes.isPlaying);
        $audio.pause();
        clearInterval(audioPlayer.vars.states.intervalProgress);

    },

    updatePercentagePlayed($audioPlayer){

        const $audio = $audioPlayer.querySelector('audio');
        const $progressBarActive = $audioPlayer.querySelector(audioPlayer.vars.queries.progressBarActive);
        const $currentTime = $audioPlayer.querySelector(audioPlayer.vars.queries.currentTime);

        audioPlayer.vars.states.intervalProgress = setInterval(() => {

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
        const $component = $audioPlayer.closest(audioPlayer.vars.queries.component);

        const $gridWrap = $component.closest('.grid-wrap');
        const $progress = $component.querySelector(audioPlayer.vars.queries.progressBar);


        const progressWidth = $progress.offsetWidth;
        const duration = $audio.duration;
        const clickedPosition = event.clientX - $progress.offsetLeft  - $component.offsetLeft - $gridWrap.offsetLeft;
        const wishedSeconds = (clickedPosition / progressWidth) * duration;

        $audio.currentTime = wishedSeconds;

        audioPlayer.play($audioPlayer);

    }
}