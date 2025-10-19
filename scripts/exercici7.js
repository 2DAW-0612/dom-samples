/**
 * Crear paràgraf dinàmicament amb un botó que quan s'apreta, s'elimina el respectiu paràgraf
 * @param {integer} num Número de paràgraf a crear
 */
function crearParagrafs(num) {
	const c = document.getElementById("container");

	for (let i=0; i<num; i++) {
		const p = document.createElement("p");
		p.innerText = "Paràgraf: " + (i+1);
		const b = document.createElement("button");
		b.innerText = "Boto"
		b.addEventListener('click', ()=>{
			p.remove();
		});
		p.appendChild(b);
		c.appendChild(p);
	}
}

// Al carregar la pàgina creen 5 paràgrafs
window.onload = crearParagrafs(5);