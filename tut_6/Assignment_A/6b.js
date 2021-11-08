setTimeout(addParagraph, 5000);

function addParagraph() {
    var element = document.createElement("p");
    var text = document.createTextNode("This is a paragraph, which appeared in 5 seconds.");
    element.appendChild(text);
    document.querySelector("body").appendChild(element);
}