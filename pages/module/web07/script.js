console.log("Script de la sesion Web07");

//getElementById: Seleccionar y obtener una referencia a un elemento HTML
document.getElementById("title").innerHTML = "El elote en CDMX cuesta $30.00";

function handleTitle() {
  document.getElementById("title").style.color = "red";
}

function changeColor(color) {
  document.getElementById("description").style.color = color;
}

function changeColorTextUsingThis(color, elementRef) {
  console.log(elementRef);
  elementRef.style.color = color;
  //el elemento HTML no tiene un id asignado
  // no puedo usar document.getElementById()
}

function changeColorUsingClass() {
  // getElementsByClassName: seleccionar y devolver una colección
  //         de elementos HTML que tienen un atributo de clase específico
  const collection = document.getElementsByClassName("title-article");
  console.log(collection);

  for (index = 0; index < collection.length; i++) {
    collection[index].style.color = "#9FE2BF";
  }
}

function resetColorParagraph() {
  const collection = document.getElementsByTagName("p");
  changeColorOfCollection(collection, "black");
}

function changeColorOfCollection(collection, color) {
  console.log(collection);

  console.log(collection.length);

  for (index = 0; index < collection.length; index++) {
    console.log("Elemento modificado: " + collection[index].innerHTML);

    collection[index].style.color = color;
  }
}
