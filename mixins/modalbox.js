export default {
    methods:{

        showModalbox(id){

            this.closeModalbox();

            let modalboxQuery = '*[data-modalbox="'+ id +'"]';
            let $modalbox = document.querySelector(modalboxQuery);

            if($modalbox){

                $modalbox.classList.add('show');

            } else {

                console.log("Modalbox "+ modalboxQuery +"not found!");

            }

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