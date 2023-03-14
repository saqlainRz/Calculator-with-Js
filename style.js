let screenOutput = document.getElementById('output-Screen');

function display(num) {

    screenOutput.value += num;
}

function Clear() {

    screenOutput.value = "";
}
function Delete() {

    screenOutput.value = screenOutput.value.slice(0, -1);
}

function Calculate() {

    screenOutput.value = eval(screenOutput.value);
}

function display(num) {

    screenOutput.value += num;


}





