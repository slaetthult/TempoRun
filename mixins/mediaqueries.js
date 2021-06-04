export default {

    data (){

        return {

            mediaQueries: {},

        }

    },

    mounted(){

        this.getMediaQueries();

    },

    methods:{

        getMediaQueries(){

          let orderedMediaQueries = {};
          let mediaQueries = getComputedStyle(document.body, '::before').getPropertyValue('content').slice(0, -2);
          mediaQueries = mediaQueries.replace('"', "");
          mediaQueries = mediaQueries.split(",");

          for(const mediaQuery of mediaQueries){
            const viewport = mediaQuery.split(":");
            orderedMediaQueries[viewport[0]] = parseInt(viewport[1].replace('px', ""));
          }

          this.mediaQueries = orderedMediaQueries;

        }

    }

};
