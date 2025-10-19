window.onload = () => {
	const c = document.getElementById("container");
	const r = document.getElementById("result");
	const fills = c.children;
	let p;

	// Creem un paràgraf per saber el número de fills
	p = document.createElement("p");
	p.textContent = `Hi ha ${fills.length} fills`;
	r.appendChild(p);

	for (let i=0; i< fills.length; i++) {
		// Per cada fill mostrem el seu tipus
		p = document.createElement("p");
		p.textContent = `Fill ${i+1} és de tipus ${fills[i].tagName}`;
		r.appendChild(p);
	}
}