// // const body = document.body
// // const maincontainer = document.querySelector(".mainContainer")

// // function cardGenretor(tag,attName,attType,parent){
// //     let element = document.createElement(tag);
// //     if(!! attName && attType){
// //         element.setAttribute(attName,attType)
// //     }
// //     if(!!parent){
// //         parent.append(element)
// //     }
// //     return element;
// // }

// // window.addEventListener("scrollend",function(e){
// //     for(let i =0;i<15;i++){
// //         cardGenretor("div","class","card",maincontainer)
// //     }
// // })

// const body = document.body;
// const maincontainer = document.querySelector(".mainContainer");

// function cardGenerator(tag, attName, attType, parent) {
//     let element = document.createElement(tag);
//     if (!!attName && attType) {
//         element.setAttribute(attName, attType);
//     }
//     if (!!parent) {
//         parent.append(element);
//     }
//     return element;
// }

// window.addEventListener("scrollend", function (e) {
//     let fragment = document.createDocumentFragment();

//     for (let i = 0; i < 15; i++) {
//         let card = cardGenerator("div", "class", "card", null);
//         fragment.appendChild(card);
//     }

//     maincontainer.appendChild(fragment);
// });

const body = document.body;
const maincontainer = document.querySelector(".mainContainer");

window.addEventListener("scrollend", function (e) {
    maincontainer.innerHTML +=  "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"
});