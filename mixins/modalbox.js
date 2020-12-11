export default {

  methods:{

    showModalbox(id){

      this.closeModalbox();

      let modalboxQuery = '*[data-modalbox="'+ id +'"]';
      let $modalbox = document.querySelector(modalboxQuery);

      if($modalbox && !$modalbox.classList.contains('show')){

        setTimeout(()=>{

          $modalbox.classList.add('show');

        }, 10);

      } else if(!$modalbox) {

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

        if(event && !event.target.hasAttribute("data-modalbox-trigger") && event.target.closest(".modalbox")){

          return false;

        }

        $modalbox.classList.remove('show');

      }

    }

  }

};
