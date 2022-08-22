// create directives - must start with v and use camel case, but will 
// automatically be converted to kebab case in the template 
// (use kebab case in template)
export const vAutofocus = {
    mounted: (elem) => {
        elem.focus();
    }
}