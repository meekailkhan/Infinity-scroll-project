const body = document.body
const maincontainer = document.querySelector(".mainContainer")

function cardGenretor(tag,attName,attType,parent){
    let element = document.createElement(tag);
    if(!! attName && attType){
        element.setAttribute(attName,attType)
    }
    if(!!parent){
        parent.append(element)
    }
    return element;
}

window.addEventListener("scrollend",function(e){
    let fragment = document.createDocumentFragment()
    for(let i =0;i<15;i++){
        cardGenretor("div","class","card",maincontainer)
    }
})