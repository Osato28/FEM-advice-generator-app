let adviceID = document.getElementById('adviceID');
let adviceText = document.getElementById('adviceText');
let rerollButton = document.getElementById('rerollButton')

function fetchAdvice(id:number = -1) {
    adviceID!.innerText = '...';
    adviceText!.innerText = 'Loading...';
    // if id < 0 {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            adviceID!.innerText = data.slip.id;
            adviceText!.innerText = data.slip.advice;
            adviceText!.focus();
        })
        .catch(error => console.log(error));
    // }
}

fetchAdvice();

// TODO: process button onClick: fetch new advice, THEN return focus to adviceText

rerollButton?.addEventListener('click', (ev) => {
    fetchAdvice();
});
rerollButton?.addEventListener('keydown', (ev) => {
    if (ev.key == 'Enter' || ev.key == 'Space') {
        fetchAdvice();
    }
})