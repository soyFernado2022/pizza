var tam=document.querySelector("#pizzas ");
var cant=document.querySelector("#v");
var refresco=document.querySelector("#refresco");
var papas=document.querySelector("#papas");
var alitas=document.querySelector("#alitas");
var valor=document.querySelector("#valor");
var res=document.querySelector("#res");
var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var p3=document.querySelector("#p3");
var extras=0;

cant.oninput=()=>{calcular()}
tam.onchange=()=>{calcular()}
cant.oninput=()=>{calcular()}
refresco.onchange=()=>{calcular()}
papas.onchange=()=>{calcular()}
alitas.onchange=()=>{calcular()}
const calcular=()=>{
    n=parseInt(cant.value);
    valor.innerHTML=n;
    let costopizza=0; let total=0; let extras=0;
    let costosExtra=0;
    switch (tam.value){
        case "1": costopizza=100;break;
        case "2": costopizza=120;break;
        case "3": costopizza=150;break;
        case "4": costopizza=180;break;
    }
    if(p2.checked){
        costosExtra=20;
    }
    if(p3.checked){
        costosExtra=35;
    }

        if(refresco.checked){
            extras+=40;
        }
        if(papas.checked){
            extras+=50;
        }
        if(alitas.checked){
            extras+=75;
        }
        costopizza=costopizza+costosExtra;
        total=(costopizza*n)+extras;
        res.innerHTML=total.toFixed(2);
        
    }

