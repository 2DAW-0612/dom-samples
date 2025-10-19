/**
 * Afegir els paràgrafs indicats segons el valor del input
 */
function afegirParagrafs() {
	const inputElement = document.getElementById("numero");
	const c = document.getElementById("container");
	let num = inputElement.value;
	
	if (num) { // Amb això ens assegurem si han entrat un valor o no
		let fills = c.children.length; // Per saber el nombre de fills
		for (let i=0; i<num; i++) {
			let p = document.createElement("p");
			p.innerText = `Sóc el fill número: ${fills + i + 1}`;
			c.appendChild(p);
		}
		inputElement.value = ""; // Resetegem el valor entrat
	}
}