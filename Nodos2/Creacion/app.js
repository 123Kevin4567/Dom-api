const padre = document.querySelector(".container");

const nodo = document.createElement("h2");

padre.appendChild(nodo);



const list = document.querySelector("ul");

const item = document.createElement("li");

item.textContent = "Nuevo Juguete";

item.classList.add("item");

list.appendChild(item);


const item1 = document.createElement("li");

item1.textContent = "Buzz light Year";

item1.classList.add("item");

list.appendChild(item1);


const item2 = document.createElement("li");

item2.textContent = "Woody";

item2.classList.add("item");

list.appendChild(item2);


const card = document.querySelector(".card");

const listaa = document.querySelector("ul");

const titulo = document.createElement("h2");

titulo.textContent = "Toy Story";

card.appendChild(titulo);

card.insertBefore(titulo, listaa);



const final = document.querySelector("ul");

const afterbegin = document.createElement("li");
afterbegin.classList.add("item");

afterbegin.textContent = "Al inicio de la list";

final.insertAdjacentElement("afterbegin", afterbegin); 


// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------


// const padre = document.querySelector(".container");
// const nodo = document.createElement("h2");
// padre.appendChild(nodo)

// const list = document.querySelector("#list");

// let item = document.createElement("li");
// let html = document.createElement("li");
// let css = document.createElement("li");
// let js = document.createElement("li");

// item.textContent = "Item nuevo";
// html.textContent = "HTML";
// css.textContent = "CSS";
// js.textContent = "JS";

// item.classList.add("item");
// html.classList.add("item");
// css.classList.add("item");
// js.classList.add("item");

// list.append(item, js, css, html);

// const card = document.querySelector(".card");
// const lista_sin_orden = document.querySelector("#list");
// const titulo = document.createElement("h2");
// titulo.textContent = "Soy el titulo más de los más";
// // card.appendChild(titulo);
// // card.insertBefore(titulo, final)

// const afterbegin = document.createElement("li");
// afterbegin.classList.add("item");
// afterbegin.textContent = "Al inicio de la lista ordenada";

// solucion
// lista_sin_orden.insertAdjacentElement("afterend", afterbegin);

const dias = [
  {
    id: 1,
    name: "Lunes",
    img: "https://picsum.photos/640/360",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
  },
  {
    id: 2,
    name: "Martes",
    img: "https://picsum.photos/640/360",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
  },
  {
    id: 3,
    name: "Miercoles",
    img: "https://picsum.photos/640/360",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
  },
  {
    id: 4,
    name: "Jueves",
    img: "https://picsum.photos/640/360",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
  },
  {
    id: 5,
    name: "Viernes",
    img: "https://picsum.photos/640/360",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
  },
  {
    id: 6,
    name: "Sabado",
    img: "https://picsum.photos/640/360",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
  },
  {
    id: 7,
    name: "Domingo",
    img: "https://picsum.photos/640/360",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
  },
];

// console.log($dias);

// dias.map((dia) => {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   const img = document.createElement("img");
//   img.src = dia.img;

//   const title = document.createElement("h2");
//   title.textContent = dia.name;

//   const paragraph = document.createElement("p");
//   paragraph.textContent = dia.paragraph;

//   card.appendChild(img);
//   card.appendChild(title);
//   card.appendChild(paragraph);

//   padre.appendChild(card);
// });


dias.map(({name,img,paragraph}) =>{
    const $card = document.createElement("div");
    const $card_header = document.createElement("div"); 
    const $card_h2 = document.createElement("h2");
    const $card_body = document.createElement("div");
    const $card_img = document.createElement("img");
    const $card_paragraph = document.createElement("p");
    const $button = document.createElement("a");
    const $button_span = document.createElement("span");    
    const $button_icon = document.createElement("i");



$card.classList.add("card");
$card_header.classList.add("card__header");
$card_h2.classList.add("card__title");
$card_body.classList.add("card__body");  
$card_img.classList.add("card__img");
$card_paragraph.classList.add("card__paragraph");
$button.classList.add("button", "button--outline");
$button_span.classList.add("button__text");
$button_icon.classList.add("bx", "bxs-chevro-right", "button__icon"); 

// Agregamos los valores del objeto a los elementos

$card_h2.textContent = name;
$card_paragraph.textContent = paragraph;
$button_span.textContent = "Ver más";

// Agregar los atributos

$card_img.setAttribute("src", img);
$card_img.setAttribute("alt", name);
$button.setAttribute("href", "#");

// Agregamos los elementos hijos

$card_body.appendChild($card_img);  
$card_body.appendChild($card_paragraph);
$card_header.appendChild($card_h2);
$card.appendChild($card_header);
$card.appendChild($card_body);
$button.appendChild($button_span); 
$button.appendChild($button_icon);
$card_body.appendChild($button);
padre.appendChild($card);   





})












// const list = document.querySelector("#list");
// let html = document.createElement("li");
// html.textContent = "Item nuevoo";
// html.classList.add("item");
