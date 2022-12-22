export function showModalbox(id:string){

    closeModalbox();

    const modalboxQuery = '*[data-modalbox="'+ id +'"]';
    const $modalbox = document.querySelector(modalboxQuery);

    if($modalbox && !$modalbox.classList.contains('show')){

        setTimeout(()=>{

            $modalbox.classList.add('show');

        }, 10);

    } else if(!$modalbox) {

        console.log("Modalbox "+ modalboxQuery +"not found!");

    }

}

export function closeModalbox(event:any = null, id:string = ''){

    if(event){

        if(event.target.hasAttribute("data-modalbox-trigger")){

            return false;

        }

    }

    let modalboxQuery = '*[data-modalbox].show';

    if(id){

        modalboxQuery = '*[data-modalbox="'+ id +'"].show';

    }

    const $modalbox = document.querySelector(modalboxQuery);

    if($modalbox){

        if(event && !event.target.hasAttribute("data-modalbox-trigger") && event.target.closest(".modalbox")){

            return false;

        }

        $modalbox.classList.remove('show');

    }

}
