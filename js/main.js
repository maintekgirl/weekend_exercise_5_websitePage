function alertFunction () {
alert("Hi! You changed button color");
}


/*function changeColor(element, color) {
    element.style.color = color;
  }*/


  let btnArticle = document.querySelector("#btn");

  btnArticle.addEventListener("click", () => btnArticle.style.backgroundColor="#ff0d7e")