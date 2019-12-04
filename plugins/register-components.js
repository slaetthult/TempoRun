import Vue from 'vue';
import _ from 'lodash';

const components = require.context('@/components', true, /[a-zA-Z]\w+\.(vue)$/);
_.forEach(components.keys(), fileName => {
    fileName = fileName.toLowerCase();
    if(
        fileName.indexOf('base') !== -1 ||
        fileName.indexOf('modules') !== -1 ||
        fileName.indexOf('partials') !== -1
    ){
        const componentConfig = components(fileName);
        const componentName = fileName.split('/').pop().split('.')[0];
        Vue.component(componentName, componentConfig.default || componentConfig);
    }
});