export const scriptLoader = (dataJsQuery = '', scriptPath = '') => {

    const $dataJsElements = document.querySelectorAll(dataJsQuery);

    if($dataJsElements.length > 0){
        import(`/src/${scriptPath}`)
        .then((module) => {
            const initTarget = Object.values(module).find(
                (exported) => exported && typeof exported.init === 'function'
            );
            initTarget?.init();
        })
        .catch((error) => {
            console.error('Error loading module:', error);
        });
    }

}