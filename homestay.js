let image=document.querySelector(".image");
let images=['photo5.jpg','photo6.jpg','photo7.jpg','photo9.jpg','photo10.jpg','photo4.jpg','photo8.jpg'];
setInterval(function(){
    let rendom=Math.floor(Math.random()*7);
    image.src=images[rendom];
},1200);

let input=document.querySelector("#img");
let inputs=['logo2.png','logo1.png','logo3.jpg'];
setInterval(function(){
    let rendom=Math.floor(Math.random()*3);
    input.src=inputs[rendom];
},1500);
