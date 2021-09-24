let inputRef = document.querySelector("#name-input");
let outputRef = document.querySelector("#name-output");
inputRef.addEventListener("input",inputChange);

function inputChange(event) {
    if (inputRef.value === ""){
        outputRef.innerHTML = "незнакомец";
    } else {
        outputRef.textContent = event.currentTarget.value;
    }
}