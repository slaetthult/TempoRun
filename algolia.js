import algoliasearch from 'algoliasearch/lite.js';
import instantsearch from 'instantsearch.js';
import { configure, infiniteHits, searchBox, hits, pagination, refinementList, menu, hierarchicalMenu, currentRefinements, clearRefinements, geoSearch } from 'instantsearch.js/es/widgets';
import { history } from 'instantsearch.js/es/lib/routers';
import { simple } from 'instantsearch.js/es/lib/stateMappings';
import { algoliaConfig } from 'algolia-config.js';
import { setSiteSearch, getSiteSearch } from 'store.js';
import { createInfiniteHitsSessionStorageCache } from 'instantsearch.js/es/lib/infiniteHitsCache';
import { Loader } from "@googlemaps/js-api-loader";

export const algolia = {

    setup(identifier = ''){

        if(identifier === '' || !document.querySelector(algoliaConfig[identifier].hitsQuery)){
            return false;
        }

        const searchClient = algoliasearch(algoliaConfig.applicationID, algoliaConfig.searchOnlyAPIKey);

        let routing = '';
        let initialUiState = '';

        if(identifier !== algoliaConfig.identifierCacheInSessionStorage){

            routing = {
                routing: {
                    stateMapping: simple(),
                    router: history()
                }
            }

        } else {

            initialUiState = getSiteSearch();
            initialUiState = initialUiState && initialUiState.length > 0 ? JSON.parse(getSiteSearch()) : '';

        }

        const search = instantsearch({
            indexName: algoliaConfig[identifier].indexName,
            searchClient,
            routing: routing,
            initialUiState: initialUiState,
            onStateChange({ uiState, setUiState }) {

                if(identifier === algoliaConfig.identifierCacheInSessionStorage){
                    setSiteSearch(JSON.stringify(uiState));
                }

                setUiState(uiState);

            },
            searchFunction: (helper) => {
                if (
                    algoliaConfig[identifier].searchBoxQuery &&
                    algoliaConfig[identifier].requiredLettersToSearch &&
                    helper.state.query.length < algoliaConfig[identifier].requiredLettersToSearch)
                {
                    return false;
                }
                helper.search();
            }
        });

        algolia.addWidgets.init(search, identifier);

        return search;

    },

    hitHtmlRenderer: {

        templates(identifier){

            return {
                empty: ({ query }, { html }) =>

                    html`${algoliaConfig.hitTemplates.empty(query)}`,

                item(hit, { html, components }) {

                    const index = hit.__position;

                    if(!algoliaConfig[identifier].hitTemplates[hit.objectType]){
                        console.log(`Missing renderer for ${hit.objectType}! Add in theme directory in /scripts/utils/algolia-config.js.`);
                        return '';
                    }

                    return html`${algoliaConfig[identifier].hitTemplates[hit.objectType](hit)}`;

                }

            }

        }

    },

    addWidgets: {

        init(search, identifier){

            algolia.addWidgets.common(search, identifier);

            if(algoliaConfig[identifier].infiniteHits){

                algolia.addWidgets.infiniteHits(search, identifier);

            } else {

                algolia.addWidgets.hits(search, identifier);

            }

            if(algoliaConfig[identifier].searchBoxQuery){

                algolia.addWidgets.searchBox(search, identifier);

            }

            if(algoliaConfig[identifier].paginationQuery){

                algolia.addWidgets.pagination(search, identifier);

            }

            if(algoliaConfig[identifier].refinements && algoliaConfig[identifier].refinements.length > 0){

                const refinements = algoliaConfig[identifier].refinements;

                for(const refinement of refinements){

                    if(refinement.type === 'list'){

                        algolia.addWidgets.refinementList(search, refinement);

                    } else if(refinement.type === 'menu'){

                        algolia.addWidgets.menu(search, refinement);

                    } else if(refinement.type === 'hierarchicalMenu'){

                        algolia.addWidgets.hierarchicalMenu(search, refinement);

                    }

                }

            }

            if(algoliaConfig[identifier].currentRefinementsQuery){

                algolia.addWidgets.currentRefinements(search, identifier);

            }

            if(algoliaConfig[identifier].clearRefinementsQuery){

                algolia.addWidgets.clearRefinements(search, identifier);

            }

            if(algoliaConfig[identifier].geoSearchQuery){

                algolia.addWidgets.geoSearch(search, identifier);

            }

        },

        common(search, identifier){

            return search.addWidgets([
                configure({
                    filters: algoliaConfig[identifier].filters,
                    hitsPerPage: algoliaConfig[identifier].hitsPerPage
                })
            ]);

        },

        infiniteHits(search, identifier){

            return search.addWidgets([
                infiniteHits({
                    cache: createInfiniteHitsSessionStorageCache(),
                    container: algoliaConfig[identifier].hitsQuery,
                    templates: algolia.hitHtmlRenderer.templates(identifier),
                    showPrevious: true
                })
            ]);

        },

        hits(search, identifier){

            return search.addWidgets([
                hits({
                    container: algoliaConfig[identifier].hitsQuery,
                    templates: algolia.hitHtmlRenderer.templates(identifier)
                })
            ]);

        },

        searchBox(search, identifier){

            return search.addWidgets([
                searchBox({
                    container: algoliaConfig[identifier].searchBoxQuery,
                    placeholder: algoliaConfig.searchBoxPlaceholder
                })
            ]);

        },

        pagination(search, identifier){

            return search.addWidgets([
                pagination({
                    container: algoliaConfig[identifier].paginationQuery,
                })
            ]);

        },

        refinementList(search, refinement){

            return search.addWidgets([
                refinementList({
                    container: refinement.container,
                    attribute: refinement.attribute,
                    operator: refinement.operator,
                    sortBy: refinement.sortBy
                })
            ]);

        },

        menu(search, refinement){

            return search.addWidgets([
                menu({
                    container: refinement.container,
                    attribute: refinement.attribute,
                    sortBy: refinement.sortBy
                })
            ]);

        },

        hierarchicalMenu(search, refinement){

            return search.addWidgets([
                hierarchicalMenu({
                    container: refinement.container,
                    attributes: refinement.attributes,
                    sortBy: refinement.sortBy
                })
            ]);

        },

        currentRefinements(search, identifier){

            return search.addWidgets([
                currentRefinements({
                    container: algoliaConfig[identifier].currentRefinementsQuery
                })
            ]);

        },

        clearRefinements(search, identifier){

            return search.addWidgets([
                clearRefinements({
                    container: algoliaConfig[identifier].clearRefinementsQuery
                })
            ]);

        },

        async geoSearch(search, identifier){

            const loader = new Loader({
                apiKey: algoliaConfig.googleMapsAPIKey,
                version: "weekly"
            });

            await loader.importLibrary('maps');

            return search.addWidgets([
                geoSearch({
                    container: algoliaConfig[identifier].geoSearchQuery,
                    googleReference: window.google,
                    mapOptions: {
                        streetViewControl: true
                    },
                    enableRefineOnMapMove: false
                })
            ]);

        }

    }

}