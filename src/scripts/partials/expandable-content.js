export const expandableContent = {
    vars: {
        componentQuery:                     '*[data-js=expandable-content]',
        contentWrapperQuery:                '*[data-expandable-content-wrapper]',
        toggleQuery:                        '*[data-expandable-content-toggle]',

        scrollAfterCollapseAttribute:       'data-expandable-content-scroll-after-collapse',

        activeClass:                        'expandable-content--expanded',
        expandableClass:                    'expandable-content--expandable'
    },
    init(){

        expandableContent.find();

    },
    find(){

        const $expandableContents = document.querySelectorAll(expandableContent.vars.componentQuery);

        if($expandableContents.length === 0){
            return false;
        }

        for(const $expandableContent of $expandableContents){

            expandableContent.addEvenTrigger($expandableContent);

        }

    },

    addEvenTrigger($expandableContent){

        const $toggleButton = $expandableContent.querySelector(expandableContent.vars.toggleQuery);

        if(!$toggleButton){
            return false;
        }

        $toggleButton.addEventListener('click', () => {
            expandableContent.addEventHandler($expandableContent);

        });

        expandableContent.checkIfExpandable($expandableContent);

        window.addEventListener('resize', () => {

            expandableContent.checkIfExpandable($expandableContent);

        });

    },

    addEventHandler($expandableContent){

        const $contentWrapper = $expandableContent.querySelector(expandableContent.vars.contentWrapperQuery);

        if(!$contentWrapper){
            return false;
        }

        if($expandableContent.classList.contains(expandableContent.vars.activeClass)){

            const scrollAfterCollapse = $expandableContent.getAttribute(expandableContent.vars.scrollAfterCollapseAttribute);

            expandableContent.collapse($expandableContent, $contentWrapper, scrollAfterCollapse);

        } else {

            expandableContent.expand($expandableContent, $contentWrapper);

        }

    },

    collapse($expandableContent, $contentWrapper, scrollAfterCollapse){

        $expandableContent.classList.remove(expandableContent.vars.activeClass);
        $contentWrapper.style.maxHeight = '';

        if(scrollAfterCollapse === 'true'){
            $expandableContent.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        }

    },

    expand($expandableContent){

        const $contentWrapper = $expandableContent.querySelector(expandableContent.vars.contentWrapperQuery);

        if(!$contentWrapper){
            return false;
        }

        const contentWrapperHeight = $contentWrapper.scrollHeight;

        $expandableContent.classList.add(expandableContent.vars.activeClass);
        $contentWrapper.style.maxHeight = `${contentWrapperHeight}px`;

    },

    checkIfExpandable($expandableContent){

        const $contentWrapper = $expandableContent.querySelector(expandableContent.vars.contentWrapperQuery);

        if($contentWrapper.scrollHeight > $contentWrapper.offsetHeight){
            $expandableContent.classList.add(expandableContent.vars.expandableClass);
        } else {
            $expandableContent.classList.remove(expandableContent.vars.expandableClass);
        }

    }
}