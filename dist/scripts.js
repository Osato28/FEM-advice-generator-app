"use strict";
// Encapsulated one-use variables in the function so they'll get garbage-cleaned after usage
var _a;
function cloneTemplateToWrapper(templateID, wrapperID) {
    /* Note: TypeScript got REALLY prissy about template.content, so it needs a lot of typecasting before it'll compile */
    const template = document.getElementById(templateID);
    const templateContent = template.content;
    const clone = templateContent.cloneNode(true);
    const componentWrapper = document.getElementById(wrapperID);
    componentWrapper === null || componentWrapper === void 0 ? void 0 : componentWrapper.appendChild(clone);
}
cloneTemplateToWrapper('adviceTemplate', 'componentWrapper');
// After template is loaded, initiate pointers to elements
const adviceID = document.getElementById('adviceID');
const adviceText = document.getElementById('adviceText');
const rerollButton = document.getElementById('rerollButton');
const btnActiveClass = (_a = rerollButton === null || rerollButton === void 0 ? void 0 : rerollButton.dataset.active) !== null && _a !== void 0 ? _a : 'active';
var btnIsActive = true;
function fetchAdvice(id = -1) {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
        adviceID.innerText = data.slip.id;
        adviceText.innerText = data.slip.advice;
        adviceText.focus();
    })
        .catch(error => console.log(error));
    // Deactivate button for 1800 ms
    // Reason: fetch gets the same result as before if you click more often than that; probably due to DDoS protection + cache
    rerollButton === null || rerollButton === void 0 ? void 0 : rerollButton.classList.remove(btnActiveClass);
    btnIsActive = false;
    setTimeout(() => {
        rerollButton === null || rerollButton === void 0 ? void 0 : rerollButton.classList.add(btnActiveClass);
        btnIsActive = true;
    }, 1800);
}
fetchAdvice();
// And add event handlers
rerollButton === null || rerollButton === void 0 ? void 0 : rerollButton.addEventListener('click', (ev) => {
    // if the button is active, process click
    btnIsActive && fetchAdvice();
});
rerollButton === null || rerollButton === void 0 ? void 0 : rerollButton.addEventListener('keydown', (ev) => {
    if (btnIsActive && (ev.key == 'Enter')) {
        fetchAdvice();
    }
});
