function dis(val) {
    document.querySelector(".screen").value += val;
}

function clr() {
    document.querySelector(".screen").value = "";
}

function solve() {
    let x = document.querySelector(".screen").value;
    let y = eval(x);
    document.querySelector(".screen").value = y;
}