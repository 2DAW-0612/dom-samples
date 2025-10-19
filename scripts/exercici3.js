window.onload = () => {
	const c = document.getElementById("container");
	const r = document.getElementById("result");
	const fills = c.children;
	let p;

	p = document.createElement("p");
	p.textContent = `Hi ha ${fills.length} fills`;
	r.appendChild(p);

	for (let i=0; i< fills.length; i++) {
		p = document.createElement("p");
		p.textContent = `Fill ${i+1} és de tipus ${fills[i].tagName}`;
		r.appendChild(p);
	}
}