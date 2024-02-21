import { persistentAtom } from '@nanostores/persistent'

export const theSiteSearch = persistentAtom('sitesearch', '');


export function setSiteSearch(value) {
    theSiteSearch.set(value);
}

export function getSiteSearch() {
    return theSiteSearch.get();
}

export function clearSiteSearch() {
    theSiteSearch.set('');
}