let start_btn =document.querySelector('.start');
let stop_btn =document.querySelector('.stop');
let reset_btn =document.querySelector('.reset');

let hrs = min = sec = ms = 0, startTime;

start_btn.addEventListener('click', () => {
    start_btn.classList.add('start-paused');
    stop_btn.classList.remove('stop-paused');
    startTime = setInterval(() => {
        ms++;//ms=ms+1;
        if (ms == 100) {
            sec++;
            ms = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hrs++;
            min = 0;
        }
        updateDisplay();
    }, 10);
});

stop_btn.addEventListener('click', () => {
    clearInterval(startTime);
    start_btn.classList.remove('start-paused');
    stop_btn.classList.add('stop-paused');
});
reset_btn.addEventListener('click', () => {
    hrs = min = sec = ms = 0;
    clearInterval(startTime);
    updateDisplay();
    start_btn.classList.remove('start-paused');
    stop_btn.classList.remove('stop-paused');
});

function updateDisplay() {
    //Formated Display
    hours = hrs < 10 ? '0' + hrs : hrs;
    minutes = min < 10 ? '0' + min : min;
    seconds = sec < 10 ? '0' + sec : sec;
    mms = ms < 10 ? '0' + ms : ms;
    //Output
    document.querySelector('.hrs').innerText = hours;
    document.querySelector('.min').innerText = minutes;
    document.querySelector('.sec').innerText = seconds;
    document.querySelector('.ms').innerText = mms;
} 