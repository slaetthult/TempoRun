export default {
    methods:{

        showModalbox(id){

            this.closeModalbox();

            let modalboxQuery = '*[data-modalbox="'+ id +'"]';

            let $modalbox = document.querySelector(modalboxQuery);

            $modalbox.classList.add('show');

        },

        closeModalbox(event = null){


            if(event){
                if(event.target.hasAttribute("data-modalbox-trigger")){
                    return false;
                }
            }

            let modalboxQuery = '*[data-modalbox].show';

            let $modalbox = document.querySelector(modalboxQuery);

            if($modalbox){

                $modalbox.classList.remove('show');

            }

        }

    }
};