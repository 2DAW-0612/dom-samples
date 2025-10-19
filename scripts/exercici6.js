// Al carregar la pàgina
window.onload = () => {

	let buttons = document.getElementsByTagName("button");
	for (let i=0; i<buttons.length; i++) {
		buttons[i].classList.add('activable');
	}

}