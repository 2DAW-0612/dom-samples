# Exercicis de manipulació del DOM fets a classe
Intenteu fer-los per vosaltres mateixos abans de mirar la solució proposada

# Exercici 1. Afegir paràgraf dintre un div

Tenim un `<div id="contenidor">`. Al carregar la pàgina hem d'afegir un paràgraf al seu interior.

# Exercici 2. Comptar elements d'un tipus que hi ha
Comptar el nombre d’elements `<p>` i `<div>` presents en un document. Mostrar aquests valors dins dels elements `<span id="tipus-p">` i `<span id="tipus-div">`, respectivament, quan s’apreti un botó.

A més, es crearan dos botons addicionals: un per afegir un nou `<div>` i un altre per afegir un nou `<p>`. Quan es faci clic al botó de comptar, el resultat ha d’incloure també els elements afegits dinàmicament.

# Exercici 3. Fills d'un contenidor
Saber el nombre de fills d'un contenidor (id="container") i per cadascun dels fills mostrar el seu tipus. Això s'ha d'executar al carregar la pàgina.

# Exercici 4. Mostrar el missatge segons el número de fill
El fitxer html conté 5 paràgraf `<p>`. A partir del valor introduit al camp input
ha de mostrar un missatge (alert) que indiqui, per exemple, el paràgraf (num) té valor: {el que indiqui el paràgraf}. És a dir, a de mostrar el valor del paràgraf segons l'índex indicat-

# Exercici 5. Afegir múltiples paràgraf amb un bucle
Al carregar la pàgina afegeix 5 `<p>` amb el text "Paràgraf número X" on X és l'índex.

# Exercici 6. Eliminar els 2 primers fills d'un div
Eliminar els 2 primers fills d'un div

# Exercici 7. Buscar tots els botons i activar-los
Afegir dinàmicament una classe `activable` a tots els botons

# Exercici 8. Crear Paragràf amb bons
Crear dinàmicament varis `<p>`  amb un botó al seu interior de forma que quan s'apreti el botó s'elimini el respectiu `<p>`.

# Exercici 9. Mostrar tota l'estructura del DOM
Mostrar tots l'estructura del DOM (a partir del body) per pantall

# Exercici 10. Historial de paràgraf afegits
Afegir paràgraf dinàmicament i mantenir l'historial persistent.

- Crea un `<div id="contenidor">` i un `input` per escriure text.
- En fer click a un botó afegeix un `<p>` amb un text dintre el div.
- Desa el paràgraf al localStorage com a array JSON
- En carregar la pàgina mostra tots els paràgraf guardats
- Afegeix un botó per esborrar l'historial

# Exercici 11. Selector intel·ligent amb validació
Crea un `<select>` amb opcions carregades des d'un array i valida la selecció.
- Crea un array d'assignatures i afegeix-les com a `<option>` dins d'un ` <select id="assignatures">`
- Quan l'usuari selecciona una opció, mostra-la en un `<p>` i desa-la a sessionStorage.
- Si l'usuari selecciona "---" o deixa el camp buit, mostra un missatge d'error i aplica una classe `error` al paràgraf.

# Exercici 12. Gestió de seccions amb preferència
Permetre activar una secció i recordar-la entre sessions
- Crea 3 `<section>` amb contingut diferent i un menú amb botons per activar-les.
- Quan s'activa una secció, afegeix la classe `visible` i elimina-la de les altres.
- Desa l'`id` de la sessió activa al localStorage i utilitza-la al carregar la pàgina.