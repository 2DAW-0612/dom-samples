// Al carregar la pàgina
window.onload = () => {

	// Assignem events als diferents botons
	const botoTotal = document.getElementById('calcular-total');
	const botoAfegirDiv = document.getElementById('afegir-div');
	const botoAfegirP = document.getElementById('afegir-p');

	botoTotal.addEventListener('click', () => {
		calcularTotal();
	});

	botoAfegirDiv.addEventListener('click', () => {
		afegirDiv();
	});

	botoAfegirP.addEventListener('click', () => {
		afegirP();
	});
}

/**
 * Calcular el total de divs i p que hi ha al document
 * i mostrar-los al lloc respectiu
 */
function calcularTotal() {
	let totalP = document.getElementsByTagName("p").length;
	let totalDiv = document.getElementsByTagName("div").length;

	let divContainer = document.getElementById("tipus-div");
	let pContainer = document.getElementById("tipus-p");
	
	divContainer.innerText = `Total: ${totalDiv} DIVS`;
	pContainer.innerText = `Total: ${totalP} Ps`;
}

/**
 * Afegir un div al document
 */
function afegirDiv() {
	let container = document.getElementById("contents");
	let d = document.createElement("div");
	d.innerText = "Això és un div";
	container.appendChild(d);
}

/**
 * Afegir un p al document
 */
function afegirP() {
	let container = document.getElementById("contents");
	let p = document.createElement("p");
	p.innerText = "Això és un paràgraf";
	container.appendChild(p);
}