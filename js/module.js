import {inputCalc, resultCalc, ListHistory} from './index';




﻿let divCalc = document.createElement('div');
divCalc.className = "divCalc";
document.body.append(divCalc);

let divListHistory = document.createElement('div');
divListHistory.className = "ListHistory";
divCalc.append(divListHistory);

let a ;
let mas = [];
let q;



export const creatInput = () =>{
    let Input = document.createElement('input');
    Input.type = "text";
    Input.placeholder = "0,00";
    Input.className = "account";
    divCalc.append(Input);


    let Input2 = document.createElement('input');
    Input2.type = "text";
    Input2.placeholder = "0,00";
    Input2.className = "result";
    divCalc.append(Input2);

}

export const  createButtonClear = () =>{
        let Clear = document.createElement('button');
        Clear.className = "clear";
        Clear.innerHTML = "Сlear";
        Clear.onclick = function (){
           
            resultCalc.value = '';
            inputCalc.value = "0,00";
            backspace();
            divListHistory.innerHTML = ('');
            mas = [] ;
        };
        divCalc.append(Clear);     
}

export const  createButtonBackspace = () =>{
        let Backspace = document.createElement('button');
        Backspace.className = "backspace";
        Backspace.innerHTML = "Backspace";
        Backspace.onclick = function (){
                backsp ()
        };
        divCalc.append(Backspace);     
}

export const  backsp = () => {
            q = inputCalc.value;
            let arr = q.split('')
            arr.splice(-1)
            let b = arr.join([''])
            inputCalc.value = b;
}

export const  createButton = (a) => {
        let button = document.createElement('button');
        button.onclick=function (){ input(a);};
        button.style = "background-image: linear-gradient(to right, #f7f7f7 0%, #f7f7f7 100%);  color: #888;" ;
        button.className = "btn";
        button.innerHTML = a;
        divCalc.append(button);  
}

export const  createButtonOperator = (a) => {
        let button = document.createElement('button');
        button.onclick = function (){
                    let arrr = inputCalc.value.toString();
                        arrr = arrr.split('');
                    let w =  arrr[arrr.length-1];
                        if (w+a === '++' || w === '+'){backsp ();}
                        if (w+a === '--' || w === '-' ){backsp ();}
                        if (w+a === '//' || w === '/'){backsp ();}            
                        if (w+a === '**' || w === '*'){backsp ();}
                        if (arrr[0] !==undefined){if( a.toString !== '=') {input(a);}}
        
        };
    
    
    
        button.className = "btn";
        button.style = "background-color: #fe9241; color: white;" ;
        button.innerHTML = a;
        divCalc.append(button); 
        
}

export const  createButtonOutput = (a) => {
        let button = document.createElement('button');
        button.onclick = function (){
            
            let a;
             a = inputCalc.value + '='+ eval(inputCalc.value);
            if (eval(inputCalc.value) == undefined)
            {
                resultCalc.value = "";    
                inputCalc.value = "";
                mas.push(a);
                divListHistory.innerHTML = ('');
                for (let i=0; i < mas.length; i++){
                divListHistory.innerHTML += ('<li>' + mas[i]+'</li>');}
            } 
            else if 
            (eval(inputCalc.value) == Infinity)
            {
                resultCalc.value = "0,00";    
                alert("на ноль делить нельзя!!!");
                inputCalc.value = '';
                mas.push(a);
                divListHistory.innerHTML = ('');
                for (let i=0; i < mas.length; i++){
                
                    divListHistory.innerHTML += ('<li>' + mas[i]+'</li>');}
            } 
            else    
            {
                mas.push(inputCalc.value+'='+eval(inputCalc.value).toFixed(2));
                resultCalc.value = eval(inputCalc.value).toFixed(2);   
                inputCalc.value = eval(inputCalc.value).toFixed(2)
                divListHistory.innerHTML = ('');
                for (let i=0; i < mas.length; i++){
                    divListHistory.innerHTML += ('<li>' + mas[i]+'</li>');}
            };
        
           

        };
        button.className = "btn";
        button.style = "background-image: linear-gradient(to right, #f7f7f7 0%, #f7f7f7 100%);  color: #888;" ;
        button.innerHTML = a;
        divCalc.append(button);  
}

export const  input = (i) => { 
    inputCalc.value = inputCalc.value + i;
}

export const backspace = () => {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.lenght-1);
}

export const createButtonOpenList= () => {
    let button = document.createElement('button');
    button.onclick = function (){
        divListHistory.style = ('display: block');
       };
    button.className = " btn btnOpenList";
    button.innerHTML = 'Open history List';
    divCalc.append(button);  
}

export const createButtonCloseList= () => {
    let button = document.createElement('button');
    button.onclick = function (){
        divListHistory.style = ('display: none');

       };
    button.className = " btn btnCloseList";
    button.innerHTML = 'Close history List';
    divCalc.append(button);  
}





