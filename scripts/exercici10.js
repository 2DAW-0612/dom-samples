// Al carregar la pàgina
window.onload = () => {
    const select = document.getElementById("assignatures");
    select.addEventListener("change", ()=>{
        canviarSeleccio();
    })
    carregarAssignatures();
    canviarSeleccio();
}

/**
 * Carregar les diferents assignatures
 */
function carregarAssignatures() {
    const assignatures = ["0612", "0613", "0615"];
    const select = document.getElementById("assignatures");
    for (let i=0; i<assignatures.length; i++) {
        const option = document.createElement("option");
        option.value = assignatures[i];
        option.text = assignatures[i];
        select.appendChild(option);
    }
}

/**
 * Funció que s'executa cada cop que canvia la selecció des del select
 */
function canviarSeleccio() {
    const c = document.getElementById("resultat");
    const select = document.getElementById("assignatures");
    if (select.value === "" || select.value === "---") {
        c.innerText = "No has seleccionat cap opció";
        c.classList.remove("success");
        c.classList.add("error");
    } else {
        c.innerText = select.value;
        c.classList.remove("error");
        c.classList.add("success");
    }
}