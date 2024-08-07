import {prefetch} from 'astro:prefetch';

export function mountPrefetchLinks($element = null){

    if(!$element){
        return '';
    }

    return $element.addEventListener('mouseover', (event) => {

        const $hoverTarget = event.target;

        if($hoverTarget.closest('a')){

            const href = $hoverTarget.closest('a').href;

            if(href?.length > 0){
                prefetch(href);
            }

        }

    });
}