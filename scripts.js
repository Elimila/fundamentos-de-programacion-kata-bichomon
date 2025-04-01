console.log(document.title);



//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const title = document.getElementById('gen-1');

title.innerText = 'Generasion 1 pokimon';
console.log(title)



//2. Cambia el color de fondo de la primera generación de Pokimon.

const back = document.querySelector('.infocard-list'); 
back.style.background = 'yellow';


//3. Imprime por consola la URL de la página.

console.log(document.URL);



//4. Imprime por consola el dominio de la página.

console.log(document.domain);

//5. Imprime todos los nodos de imagen.

const card = document.querySelectorAll('.infocard');
console.log(card);



//6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

const images = document.querySelectorAll('.infocard-lg-img img');

for (let i = 0; i < images.length; i++) {
    images[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
}


//7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`

const datacard  = document.querySelectorAll('.infocard-lg-data.text-muted');

for (let i = 0; i < datacard.length; i++) {

    const data = datacard[i];

// se busca el elemento itype flying dentro de la variable data

const flying = data.querySelectorAll('.itype.flying'); 

 if(flying) {
    data.style.background = 'red';

 }
}