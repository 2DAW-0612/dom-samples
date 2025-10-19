window.onload = () => {
	let p = document.createElement("p");
	let c = document.getElementById("contenidor");
	p.innerText = "Això és un text del paràgraf creat dinàmicamet";
	c.appendChild(p);
}