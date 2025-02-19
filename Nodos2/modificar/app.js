// insertAdjacent


const card =  {
id: 1,
name: "Titulo de la nueva card",
img: "https://picsum.photos/640/360",
paragraph:
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
};


  const $cards =document.querySelector("#cards");

  //Creamos los elemenstos de la card


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

$card_h2.textContent = card.name;
$card_paragraph.textContent = card.paragraph;
$button_span.textContent = "Ver más";

// Agregar los atributos

$card_img.setAttribute("src", card.img);
$card_img.setAttribute("alt", card.name);
$button.setAttribute("href", "#");

// Agregamos los elementos hijos

$card_header.append($card_h2);
$card_body.append($card_img, $card_paragraph, $button);
$button.append($button_span, $button_icon);
$card.append($card_header, $card_body);

$cards.append($card);

// insertAdjacent


$cards.insertAdjacentElement("beforebegin", $card);
// $cards.insertAdjacentElement("afterbegin", $card);
// $cards.insertAdjacentElement("beforeend", $card);
// $cards.insertAdjacentElement("afterend", $card);

// $cards.children.array.forEach(element => {
//     console.log(element);
    
// });



// for (let i = 0; $cards.children.length > i; i++) {
//     console.log($cards.children[i]);    
// }

const array = [...$cards.children];

array.map((item,index,array) =>{
    if (index % 2 ==0) {
        item.querySelector('a').classList.toggle('bg-error')
    } else{
        item.querySelector('a').classList.toggle('bg-white')
    }
})

// array.map(item => {
//     const button = item.querySelector('.button');
    

//     if (button.classList.contains('button--positive')) {
//         button.style.backgroundColor = 'green'; 
//     } else {
//         button.style.backgroundColor = 'white';
//     }
// });

