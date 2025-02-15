

const win = window;
const dom = document;
const head =dom.head;
const body = dom.body;
const title =dom.title;

const header = dom.querySelector('header');
const paragraph = dom.querySelector('p');
let styles = dom.styleSheets;
const script = dom.scripts;
const links = dom.links;
const img = dom.images;
const form = dom.forms;

const documento = dom.getElementById('documento');
const api =dom.getElementById('api');
const listaA = dom.getElementsByClassName('item');
const listaB = dom.getElementsByClassName(`.item`);
const padre =dom.querySelector('ul');
const hermanos= dom.querySelectorAll('ul.list > li.item');



// console.log(form);
// console.log(document);
// console.log(api);
// console.log(lista);
// console.log(listaA.lenght);
// console.log(listaB.lenght);
// console.log(padre.childNodes);
// console.log(padre.childElementCount);
// console.log(padre.children);
// console.log(padre.firstChild);
// console.log(padre.lastChild);
// console.log(padre.firstElementChild);
// console.log(padre.lastElementChild);
// console.log(padre.previousSibling);
// console.log(padre.nextSibling);
// console.log(padre.previousElementSibling);
// console.log(padre.nextElementSibling);
// console.log(padre.parentNode);
// console.log(padre.parentElement.parentElement.parentElement.parentElement);
// const $card = dom.querySelector('.card');
// console.log($card.classList.contains('.card'));
// $card.classList.add("bg-dark");
// $card.classList.remove("card");
// $card.classList.toggle("card");


let texto = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur fugiat corrupti molestiae! Ea quasi
voluptatibus vero repellendus distinctio voluptatum voluptatem quam, perspiciatis necessitatibus illum hic ut
dolorum tenetur laborum bla bla bla ${2+2-5+7*9-4/6} Renamon.`;


const elementos = dom.querySelector("#elementos");
// console.log(elementos);
elementos.textContent =texto;
elementos.innerHTML =texto;


body.style.backgroundColor = "#0007";
setTimeout(()=>{
    body.style.backgroundColor = "#fff";
},5000);












