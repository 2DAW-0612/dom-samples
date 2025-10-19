window.onload = () => {
	// Esborrarem els 2 primers fills d'un div
	let c = document.getElementById("container");
	for (let i=0; i<2; i++) {
		c.children[0].remove(); // Sempre eliminem el primer
	}
}