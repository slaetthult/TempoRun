export const expandableContent = {
    vars: {

        queries: {
            component:                      '*[data-js=expandable-content]',
            contentWrapper:                 '*[data-expandable-content-wrapper]',
            toggle:                         '*[data-expandable-content-toggle]',
        },

        attributes: {
            scrollAfterCollapse:            'data-expandable-content-scroll-after-collapse',
        },

        classes: {
            active:                         'expandable-content--expanded',
            expandable:                     'expandable-content--expandable'
        }

    },
    init(){

        expandableContent.find();

    },
    find(){

        const $expandableContents = document.querySelectorAll(expandableContent.vars.queries.component);

        if($expandableContents.length === 0){
            return false;
        }

        for(const $expandableContent of $expandableContents){

            expandableContent.addEvenTrigger($expandableContent);

        }

    },

    addEvenTrigger($expandableContent){

        const $toggleButton = $expandableContent.querySelector(expandableContent.vars.queries.toggle);

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

        const $contentWrapper = $expandableContent.querySelector(expandableContent.vars.queries.contentWrapper);

        if(!$contentWrapper){
            return false;
        }

        if($expandableContent.classList.contains(expandableContent.vars.classes.active)){

            const scrollAfterCollapse = $expandableContent.getAttribute(expandableContent.vars.attributes.scrollAfterCollapse);

            expandableContent.collapse($expandableContent, $contentWrapper, scrollAfterCollapse);

        } else {

            expandableContent.expand($expandableContent, $contentWrapper);

        }

    },

    collapse($expandableContent, $contentWrapper, scrollAfterCollapse){

        $expandableContent.classList.remove(expandableContent.vars.classes.active);
        $contentWrapper.style.maxHeight = '';

        if(scrollAfterCollapse === 'true'){
            $expandableContent.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        }

    },

    expand($expandableContent){

        const $contentWrapper = $expandableContent.querySelector(expandableContent.vars.queries.contentWrapper);

        if(!$contentWrapper){
            return false;
        }

        const contentWrapperHeight = $contentWrapper.scrollHeight;

        $expandableContent.classList.add(expandableContent.vars.classes.active);
        $contentWrapper.style.maxHeight = `${contentWrapperHeight}px`;

    },

    checkIfExpandable($expandableContent){

        const $contentWrapper = $expandableContent.querySelector(expandableContent.vars.queries.contentWrapper);

        if($contentWrapper.scrollHeight > $contentWrapper.offsetHeight){
            $expandableContent.classList.add(expandableContent.vars.classes.expandable);
        } else {
            $expandableContent.classList.remove(expandableContent.vars.classes.expandable);
        }

    }
}