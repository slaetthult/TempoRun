export function getOffsetPosition($element, offset = 0){

    const elementPosition = $element.getBoundingClientRect().top;

    return elementPosition + window.scrollY - offset;

}