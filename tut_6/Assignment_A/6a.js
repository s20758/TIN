let changed_input = null;

function setChanged_input(input) {
    changed_input = input;
}

function convert() {
    if (changed_input == null) {
        console.log("No values put in");
        return;
    }
    const cels_element = document.querySelector("#cels_input");
    const fahr_element = document.querySelector("#fahr_input");
    const cels = cels_element.value;
    const fahr = fahr_element.value;

    if (cels_element === changed_input) {
        fahr_element.value = (cels * 9 / 5) + 32;
    } else if (fahr_element === changed_input) {
        cels_element.value = (fahr - 32) * (5 / 9);
    }
}