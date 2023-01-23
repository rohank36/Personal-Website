
/*Reference Video: https://www.youtube.com/watch?v=O-pQbcOykso*/
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", debounce(rollup) ); 
});

function rollup(ev){
    console.log(window.scrollY);
    if(window.scrollY > 60){
        document.body.classList.add("up");
    }else{
        document.body.classList.remove("up");
    }
}

const debounce = func => {
    let timer;
    return event => {
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(func,10,event);
    };
};






