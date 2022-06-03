
// Encapsulated one-use variables in the function so they'll get garbage-cleaned after usage

function cloneTemplateToWrapper(templateID: string, wrapperID: string) {
    /* Note: TypeScript got REALLY prissy about template.content, so it needs a lot of typecasting before it'll compile */
    const template = document.getElementById(templateID) as HTMLMetaElement | null;
    const templateContent = template!.content as unknown as Node;
    const clone = templateContent.cloneNode(true);

    const componentWrapper = document.getElementById(wrapperID);
    componentWrapper?.appendChild(clone);
}

cloneTemplateToWrapper('adviceTemplate', 'componentWrapper');

// After template is loaded, initiate pointers to elements

const adviceID = document.getElementById('adviceID');
const adviceText = document.getElementById('adviceText');
const rerollButton = document.getElementById('rerollButton')

function fetchAdvice(id:number = -1) {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceID!.innerText = data.slip.id;
        adviceText!.innerText = data.slip.advice;

        adviceText!.focus();
    })
    .catch(error => console.log(error));
}

fetchAdvice();

// And add event handlers

rerollButton?.addEventListener('click', (ev) => {
    fetchAdvice();
});
rerollButton?.addEventListener('keydown', (ev) => {
    if (ev.key == 'Enter' || ev.key == 'Space') {
        fetchAdvice();
    }
})