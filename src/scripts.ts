let adviceID = document.getElementById('adviceID');
let adviceText = document.getElementById('adviceText');

function fetchAdvice(id:number = -1) {
    // if id < 0 {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            adviceID!.innerText = data.slip.id;
            adviceText!.innerText = data.slip.advice;
            console.log(data);
            console.log(adviceID);
            console.log(adviceText);
        })
        .catch(error => console.log(error));
    // }
}

fetchAdvice();