function addRow() {
    const name_element = document.querySelector("#name");
    const age_element = document.querySelector("#age");
    const name = name_element.value;
    const age = age_element.value;

    let table = document.querySelector("table");
    var row = table.insertRow(-1);
    var name_cell = row.insertCell(0);
    var age_cell = row.insertCell(1);

    name_cell.innerHTML = name;
    age_cell.innerHTML = age;
}