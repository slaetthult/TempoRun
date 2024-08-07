export const expandableText = {
    vars: {
        componentQuery:                     '*[data-js=expandable-text]',
        textWrapperQuery:                   '*[data-expandable-text-wrapper]',
        toggleQuery:                        '*[data-expandable-text-toggle]',

        scrollAfterCollapseAttribute:       'data-expandable-text-scroll-after-collapse',

        activeClass:                        'expandable-text--expanded',
        expandableClass:                    'expandable-text--expandable'
    },
    init(){

        expandableText.find();

    },
    find(){

        const $expandableTexts = document.querySelectorAll(expandableText.vars.componentQuery);

        if($expandableTexts.length === 0){
            return false;
        }

        for(const $expandableText of $expandableTexts){

            expandableText.addEvenTrigger($expandableText);

        }

    },

    addEvenTrigger($expandableText){

        const $toggleButton = $expandableText.querySelector(expandableText.vars.toggleQuery);

        if(!$toggleButton){
            return false;
        }

        $toggleButton.addEventListener('click', () => {
            expandableText.addEventHandler($expandableText);

        });

        expandableText.checkIfExpandable($expandableText);

        window.addEventListener('resize', () => {

            expandableText.checkIfExpandable($expandableText);

        });

    },

    addEventHandler($expandableText){

        const $textWrapper = $expandableText.querySelector(expandableText.vars.textWrapperQuery);

        if(!$textWrapper){
            return false;
        }

        if($expandableText.classList.contains(expandableText.vars.activeClass)){

            const scrollAfterCollapse = $expandableText.getAttribute(expandableText.vars.scrollAfterCollapseAttribute);

            expandableText.collapse($expandableText, $textWrapper, scrollAfterCollapse);

        } else {

            expandableText.expand($expandableText, $textWrapper);

        }

    },

    collapse($expandableText, $textWrapper, scrollAfterCollapse){

        $expandableText.classList.remove(expandableText.vars.activeClass);
        $textWrapper.style.maxHeight = '';

        if(scrollAfterCollapse === 'true'){
            $expandableText.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        }

    },

    expand($expandableText){

        const $textWrapper = $expandableText.querySelector(expandableText.vars.textWrapperQuery);

        if(!$textWrapper){
            return false;
        }

        const textWrapperHeight = $textWrapper.scrollHeight;

        $expandableText.classList.add(expandableText.vars.activeClass);
        $textWrapper.style.maxHeight = `${textWrapperHeight}px`;

    },

    checkIfExpandable($expandableText){

        const $textWrapper = $expandableText.querySelector(expandableText.vars.textWrapperQuery);

        if($textWrapper.scrollHeight > $textWrapper.offsetHeight){
            $expandableText.classList.add(expandableText.vars.expandableClass);
        } else {
            $expandableText.classList.remove(expandableText.vars.expandableClass);
        }

    }
}