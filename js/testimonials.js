const sliders = document.querySelectorAll(".testimonials__content--slider__slide");
const indicators = document.querySelectorAll(".testimonials__content--indicator__img");

function removeImg(string){
    for(let j = 0; j<string.length;j++){
        string[j].classList.remove("active");
    }
}
 for(let i = 0; i < indicators.length; i++){
     indicators[i].addEventListener("click", ()=>{
         
        removeImg(indicators);
      
         indicators[i].classList.add("active");
         const id = indicators[i].getAttribute("data-id");
         
             removeImg(sliders);
             sliders[id].classList.add("active");
         
     })
 }