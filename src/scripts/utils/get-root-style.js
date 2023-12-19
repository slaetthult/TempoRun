export function getRootStyle (variable = ''){

    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(variable);

}