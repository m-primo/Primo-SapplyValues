const app_details_els = document.querySelectorAll('[app-details]');
for(let index = 0; index < app_details_els.length; index++) {
    const element = app_details_els[index];
    element.innerText = App[String(element.getAttribute('app-details'))];
}