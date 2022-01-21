const  time = 5000; //ms
const step = 1; // шаг

function outNum(num, elem) {
    let l = document.querySelector("#"+elem);
    n = 0;
    //step == 0? step = 1 : step = step;
    let t = Math.round(time/(num/step));
    let interval =setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        l.innerHTML = n;
    },

    t);
}
outNum(1000, "out-1");