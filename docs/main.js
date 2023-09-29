const arreglodeBotones = document.querySelectorAll("button");
const numeroHtml = document.querySelector(".flex>h2");

let numerorReal = 0
 numeroHtml.innerText = numerorReal;

 function sumar(sumando){
    numerorReal += sumando;
    numeroHtml.innerText = numerorReal;
 }

 arreglodeBotones.forEach((boton) =>{
    boton.addEventListener(`click`, (evento) =>{
        let numero = Number(evento.target.innerText);
        sumar(numero);
        // console.log(evento.innerText);
    })
 })

