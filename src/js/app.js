document.addEventListener("DOMContentLoaded",()=> {
    iniciarApp();
})

const iniciarApp = () => {
    createGalery();
}



const createGalery = () => {
    const galeria = document.querySelector('.galeria-img');
    
    const random = genearNumRandom();
    
    for(let i = 0; i < 12; i++){

        const picture = document.createElement('picture');
        picture.classList.add('img-picture')
        picture.innerHTML = `
            <source srcset="./build/img/galeria-frases/${random[i]}.webp" type="image/webp">
            <img loading="lazy" width = "100" height="100" src="./build/img/galeria-frases/${random[i]}.png" alt="imagenes del llamado pastoral o el llamado a servir a Dios">
        `;

        picture.onclick = () => {
            wachImage(random[i]);
        } 
        

        galeria.appendChild(picture);
        
    }

}


const wachImage = (idImg) => {
    const picture = document.createElement('picture');
    picture.innerHTML = `
        <source srcset="./build/img/galeria-frases/${idImg}.webp" type="image/webp">
        <img loading="lazy" width = "500" height="450" src="./build/img/galeria-frases/${idImg}.png" alt="imagenes del llamado pastoral o el llamado a servir a Dios">
    `;

    //creaer el overlay con la img
    const overlay = document.createElement('div');
    overlay.appendChild(picture);
    overlay.classList.add('overlay');
    
    overlay.onclick = () => {
        const body = document.querySelector('body');
        body.classList.remove('figar-body');
        overlay.remove();
        
    }

    const btnClose = document.createElement('p');
    overlay.appendChild(btnClose);
    btnClose.textContent = 'X';
    btnClose.classList.add('btn-close');
    btnClose.onclick = () => {
        const body = document.querySelector('body');
        body.classList.remove('figar-body');

        overlay.remove();
    }



    //agregarlo al html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('figar-body');
}


const genearNumRandom = () => {

    const arrayNumRandom = [];
    const copyArray = [];

    for(let i = 0; i < 12; i++) {        
        const random = Math.floor((Math.random() * (22 - 1 + 1)) + 1);
        arrayNumRandom.push(random);
        
        for(let j = 0; j < arrayNumRandom.length; j++) { 
            
        }

    }
    console.log('for ');
    console.log(arrayNumRandom);

    /*
    for(let i = 0; i < 12; i++) {
        
        for(let j = 0; j < 12; j++) {
            if(arrayNumRandom[i] == arrayNumRandom[j + 1]) {
                console.log(arrayNumRandom[i], arrayNumRandom[j + 1]);
                
                for(let j = 1; j <= 22; j++){
                    if(arrayNumRandom[i] == j){
                        arrayNumRandom[j + 1] = j;
                    }
                }
                
            }
        }
    }
    
    console.log('for each');
    */
    console.log(arrayNumRandom);
    

    return arrayNumRandom;
}