//Math.floor(Math.random() * 201)-100;

let arr = [];
let arrMaggiore50 = [];
let media;
let min;
let max;
for (let i = 0; i < 101; i++) {
    arr.push(Math.floor(Math.random() * 201) - 100);
    media+=arr[i];
    if(i===0){
        min=arr[i];
        max=arr[i];
    } else {
        if(arr[i]>50){
            arrMaggiore50.push(arr[i]);
        }
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    }
    if(i===100){
        media/=i;
    }
}
console.log("Array: " + arr);
console.log("Maggiori di 50: " + arrMaggiore50);
console.log("Minimo: " + min);
console.log("Massimo: " + max);
let info = document.getElementById("informazioni");
function stampa() {
    info.innerHTML = "Array: | " + arr.join(" | ") + "| <br>" + "Numeri maggiori di 50 presenti nell'array: | " + arrMaggiore50.join(" | ") + "| <br>" + "Valore minimo: " + min + "<br>" + "Valore massimo: " + max;
}

