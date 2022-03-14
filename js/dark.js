let theme = document.querySelector('input[name="theme"]');
let change = document.documentElement;
change.addEventListener("change", ()=>{
    if(theme.checked){
        smooth();
        change.setAttribute("data-theme","dark");
    }
    else{
        smooth();
        change.setAttribute("data-theme","light");  
    }
})
let smooth = () => {
    change.classList.add("transition");
    window.setTimeout(()=>{
        change.classList.remove("transition");
    },1000)
}

import lottieWeb from 'https://cdn.skypack.dev/lottie-web';
