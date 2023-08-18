const div = document.getElementById("heading-holder");
const keypressInfo = document.getElementById("keypressInfo");
const heading = document.getElementById("heading");
const boxHolder = document.getElementById("boxHolder");
boxHolder.style.display = "none";
const key = document.getElementById("keyText");
const code = document.getElementById("codeText");
const which = document.getElementById("whichText");

document.addEventListener("keydown", (e) => {
    div.style.display = "none";
    keypressInfo.textContent = `You just pressed ${e.key}`;
    heading.textContent = `Javascript Keycode ${e.keyCode}`;
    boxHolder.style.display = "flex";
    key.textContent = e.key;
    code.textContent = e.code;
    which.textContent = e.which;
    console.log(e);
});
