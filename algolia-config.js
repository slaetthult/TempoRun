export const algoliaConfig = {
    applicationID:                      import.meta.env.PUBLIC_ALGOLIA_APPLICATION_ID,
    searchOnlyAPIKey:                   import.meta.env.PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY,
    googleMapsAPIKey:                   import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY,

    categoryListing: {
        indexName:                      `${import.meta.env.PUBLIC_ALGOLIA_INDEX_PREFIX}${import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME}`,
        hitsPerPage:                    20,
        filters:                        'objectType:book',
        hitsQuery:                      '#product-listing__hits',
        searchBoxQuery:                 '',
        paginationQuery:                '',
        infiniteHits:                   true,
        hitTemplates: {
            book(data){
                return `
                    <div class="book">
                        <strong><a href="${data.mainVirtualCategoryLink}">${data.title}</a></strong>
                        <p>${data.description}</p>
                    </div>
                `;
            }
        }
    },
    siteSearchListing: {
        indexName:                      `${import.meta.env.PUBLIC_ALGOLIA_INDEX_PREFIX}${import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME}`,
        hitsPerPage:                    5,
        filters:                        '',
        refinements: [
            {
                type:                   'list',
                container:              '#site-search__refinements1',
                attribute:              'publishers.name',
                operator:               'and',
                sortBy:                 ['name:asc']
            },
            {
                type:                   'menu',
                container:              '#site-search__refinements2',
                attribute:              'productTypesData.productType',
                sortBy:                 ['name:asc']
            }
        ],
        hitsQuery:                      '#site-search__hits',
        searchBoxQuery:                 '#site-navigation__additional-actions__search-input',
        paginationQuery:                '#site-search__pagination',
        currentRefinementsQuery:        '#site-search__current-refinements',
        clearRefinementsQuery:          '#site-search__clear-refinements',
        infiniteHits:                   false,
        requiredLettersToSearch:        1,
        hitTemplates: {
            book(data){
                return `
                    <div class="book">
                        <strong><a href="${data.mainVirtualCategoryLink}">${data.title}</a></strong>
                        <p>${data.description}</p>
                    </div>
                `;
            },
            author(data){
                return `
                    <div class="author">
                        <strong><a href="/autor">${data.authors[0].name}</a></strong>
                        <p>${data.authors[0].bio}</p>
                    </div>
                `;
            },
            translator(data){
                return `
                    <div class="translator">
                        <strong>${data.authors[0].name}</strong>
                        <p>${data.authors[0].bio}</p>
                    </div>
                `;
            }
        }
    },
    eventListing: {
        indexName:                      `${import.meta.env.PUBLIC_ALGOLIA_INDEX_PREFIX}${import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME}`,
        hitsPerPage:                    20,
        filters:                        'objectType:event',
        hitsQuery:                      '#events-hits',
        searchBoxQuery:                 '',
        paginationQuery:                '',
        infiniteHits:                   true,
        hitTemplates: {

        },
        geoSearchQuery:                 '#events-geo',
    },
    authorListing: {
        indexName:                      `${import.meta.env.PUBLIC_ALGOLIA_INDEX_PREFIX}${import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME}`,
        hitsPerPage:                    20,
        filters:                        'objectType:author',
        hitsQuery:                      '#author-hits',
        searchBoxQuery:                 '',
        paginationQuery:                '',
        infiniteHits:                   true,
        hitTemplates: {

        }
    },
    magazineListing: {
        indexName:                      `${import.meta.env.PUBLIC_ALGOLIA_INDEX_PREFIX}${import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME}`,
        hitsPerPage:                    20,
        filters:                        'objectType:magazine',
        hitsQuery:                      '',
        searchBoxQuery:                 '',
        paginationQuery:                '',
        infiniteHits:                   true,
        hitTemplates: {

        }
    },
    hitTemplates: {
        empty(query){
            return `
                <div class="empty">
                    No results have been found for "${query}"!
                </div>
            `;
        }
    },

    identifierCacheInSessionStorage:    'siteSearchListing',
    searchBoxPlaceholder:               'Suche'
}