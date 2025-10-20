// En aquest cas no utiltizarem cap variable global
// per enmagatzemar l'historial.
// També es podria fer amb un array (si algu té dubtes sobre com fer-ho que ho demani)

// Al carregar la pàgina
window.onload = () => {
    let b = document.getElementById("afegir");
    b.addEventListener("click", () => {
        afegirParagraf()
    }); // Al fer click al boto
    let b2 = document.getElementById("borrar");
    b2.addEventListener("click", () => {
        borrarTots();
    }); 

    carregarParagrafs(); // Carreguem els paràgraf que hi puguin haver guardats
}

/**
 * Funció encarregada d'afegir un nou paràgraf en funció del text 
 * que hi ha a l'input
 */
function afegirParagraf() {
    let input = document.getElementById("contingut");
    let c = document.getElementById("contenidor");

    if (input.value) {
        // Creem el nou paràgraf
        let p = document.createElement("p");
        p.innerText = input.value;
        c.appendChild(p);    

        // Guardem el nou paràgraf a l'array de paràgraf
        const pHistory = localStorage.getItem("p_history");
        let history = [];
        if (pHistory) {
            // Si ja existia prèviament carreguem les dades que hi havia
            history =  JSON.parse(pHistory);
        }
        history.push(input.value); // Afegim el nou element
        localStorage.setItem("p_history", JSON.stringify(history)); // Guardem les dades al localStorage    
    } else {
        alert("No has entrat cap text");
    }
    input.value = "";
}

/**
 * Carregar els diferents paràgraf (si n'hi ha) des del localStorage
 */
function carregarParagrafs() {
    const pHistory = localStorage.getItem("p_history");
    if (pHistory) {
        // Ens assegurem que hi hagi algun paràgraf creat
        const history =  JSON.parse(pHistory);
        const container = document.getElementById("contenidor");
        for (let i=0; i<history.length; i++) {
            let p = document.createElement("p");
            p.innerText = history[i];
            container.appendChild(p);
        }
    }
}

/**
 * Borrar tots els paràmetres tant del localStorage com de pantalla
 */
function borrarTots() {
    const container = document.getElementById("contenidor");

    container.innerHTML = ""; // Borrem de pantalla
    localStorage.removeItem("p_history"); // Borrem del localStorage
}