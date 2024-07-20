const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}else {
    visitsDisplay.textContent = "Thank you for visiting!!"
}

numVisits++

localStorage.setItem("numVisits-ls", numVisits);