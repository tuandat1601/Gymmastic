const sildePages = document.querySelector(".register__content--form");
const nexts = document.querySelectorAll(".next");
const prevs =document.querySelectorAll(".prev");
const step =document.querySelectorAll(".register__progress--step");
const span  = document.querySelectorAll(".register__progress--step span");
const check = document.querySelectorAll(".fa-check");
let i = 0;
let current = -280;
nexts.forEach(e=>{
    e.addEventListener("click",()=>{
       
        if(i!==3){
            i++
            let ty = current*i;
            sildePages.style.transform = `translateX(${ty}px)`;
            step[i-1].classList.add("active");
            span[i-1].classList.remove("active");
            check[i-1].classList.add("active");
            console.log("up"+i);
            console.log(`${ty}px`);
        }
        else{
            step[i].classList.add("active");
            span[i].classList.remove("active");
            check[i].classList.add("active");
            setTimeout(()=>{
                alert("Your Form Has Been Successfully Submitted. Thank You My Friend");
        location.reload();
            },1000)
            
        }
    })
})
prevs.forEach(e=>{
    e.addEventListener("click", ()=>{
        console.log("dow"+i); 
        if(i==4){
            i-=2
        }
        else{
            i--;
        }
        let ty = current*i;
        sildePages.style.transform = `translateX(${ty}px)`;
        console.log(`${ty}px`);
        step[i-1].classList.remove("active");
        span[i-1].classList.add("active");
        check[i-1].classList.remove("active");
        
    })
})


