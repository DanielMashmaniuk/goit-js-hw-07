const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;
const input = document.querySelector('input');
inputEl.addEventListener('change', e => {
    const text = e.target.value;
    if (text.length == inputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.replace("invalid", "valid");
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.replace("valid", "invalid");
    }
})