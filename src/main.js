//declaring stuff ----------------------------------------------------------

const answers = [
    'Yes',
    'No',
    'Maybe',
]

let qdiv = document.querySelector('#question');
let adiv = document.querySelector('#answer');

// function library ---------------------------------------------------------

let randint = l => Math.floor(Math.random() * l);

function randAnswer(){
    return answers[randint(answers.length)];
}

function updateAnswer(){
    adiv.innerHTML = randAnswer();
}

// wiring things up -------------------------------------------------------

qdiv.onkeypress = e =>{
    if (e.key === 'Enter'){
        updateAnswer();
        qdiv.innerText = "";
        return false;
    }
}

qdiv.onclick = e => qdiv.innerText = "";