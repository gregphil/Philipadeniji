const countdown = document.querySelector('.timer');
const sec7 = document.querySelector('.sec7');
let days = 2; 
let hrs = 0;
let min = 0;
let sec = 0;

sec7.onclick = (e) => {
    showAnswer(e);
}

function createCountDown() {
    let f = Date.parse('Dec 30, 2092 01:30:00')
    let n = new Date()
    let diff = f-n

    sec = Math.floor(diff/1000);
    min = Math.floor(diff/(1000*60));
    hrs = Math.floor(diff/(1000*60*60));
    days = Math.floor(diff/(1000*60*60*24));

    let h = hrs - days * 24;
    let m = min - hrs * 60;
    let s = sec - min * 60;

    countdown.innerHTML = `<h1><span>2<i>days</i></span><span>${h}<i>hours</i></span><span>${m}<i>minuites</i></span><span>${s}<i>seconds</i></span></h1>`;
}

setInterval(() => {
    createCountDown()
}, 1000);

function showAnswer(e) {
    if (e.target.matches('.showmore')) {
        e.target.nextElementSibling.nextElementSibling.classList.toggle('showup');
    }
}


