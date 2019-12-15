document.addEventListener("DOMContentLoaded", function() {
	document.querySelector("button").onclick = count;
})

let contatore = 0;
let array_numero = [5, 7, 11, 13];

function count() {
	contatore ++;
	document.querySelector("#contatore").innerHTML = contatore;
	if (array_numero.includes(contatore)) {
		alert('Contatore a ' + contatore + ' presente in array!')
	} else {
		console.log(contatore)
	}
}