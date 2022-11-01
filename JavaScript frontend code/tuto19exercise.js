let check_string = "python";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element){
    // href = element.href;
    // if (href.includes(check_string)) {
    //     console.log(href);
    // }

    href = element.href;
    for (let index = 0; index < links.length; index++) {
    console.log(href);
    }

});