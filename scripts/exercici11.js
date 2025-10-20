// Ens guardem les seccions disponibles
const sections = ["section-1", "section-2", "section-3"];

// Al carregar la pàgina
window.onload = () => {
    const b1 = document.getElementById("activar-s1");
    b1.addEventListener("click", () =>{
        activarSeccio("section-1");
    });
    const b2 = document.getElementById("activar-s2");
    b2.addEventListener("click", () =>{
        activarSeccio("section-2");
    });
    const b3 = document.getElementById("activar-s3");
    b3.addEventListener("click", () =>{
        activarSeccio("section-3");
    });

    // Mirem si hi ha alguna seccio guardad al localStorage
    if (localStorage.getItem("visible-section")) {
        activarSeccio(localStorage.getItem("visible-section"));
    }
}

/**
 * Activar la secció identificada pel seu número
 * @param {string} id Id de la secció
 */
function activarSeccio(id) {
    const s = document.getElementById(id);
    s.classList.add("visible");
    localStorage.setItem("visible-section", id);
    for (let i=0; i<sections.length; i++) {
        if (sections[i] != id) {
            // Si no es tracta de la secció => l'hem d'amangar
            document.getElementById(sections[i]).classList.remove("visible");
        }
    }
}