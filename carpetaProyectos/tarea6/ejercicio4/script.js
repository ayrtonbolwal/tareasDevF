let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let estadoImg1 = window.getComputedStyle(img1, null).getPropertyValue('display');
let estadoImg2 = window.getComputedStyle(img2, null).getPropertyValue('display');
console.log(estadoImg1);
console.log(estadoImg2);

function cambiarFoto(){
    if(estadoImg1 == 'none'){
        img1.style.display = 'block';
        img2.style.display = 'none';
    }
    if(estadoImg2 == 'none'){
        img1.style.display = 'none';
        img2.style.display = 'block';
    }

    estadoImg1 = window.getComputedStyle(img1, null).getPropertyValue('display');
    estadoImg2 = window.getComputedStyle(img2, null).getPropertyValue('display');
}