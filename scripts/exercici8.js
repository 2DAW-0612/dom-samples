/**
 * Mostrar els fills d'un node
 * @param {Element} nodePare Node a partir del qual volem saber els fills
 * @param {string} nivell Si es vol mostrar el nivell a l'hora de visualitzar
 */
function mostrarFills(nodePare, nivell = "") {
	const fills = nodePare.children;

	for (let i=0; i< fills.length; i++) {
		console.log(nivell + fills[i].tagName);
		mostrarFills(fills[i],nivell + "="); // Funció recursiva per mostrar els fills de l'element actual. El nivell només es per temes visuals
	}

}

window.onload = () => {
	mostrarFills(document.body); // Inicialitment mostrem els fills del body
}

