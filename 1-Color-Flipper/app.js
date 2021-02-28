const value = document.querySelector(".value");
const colors = ["Green", "Red", "Blue", "Brown", "Yellow"];
const btn = document.querySelector(".btn");
const section = document.querySelector("Section");
let random,old=0;
btn.addEventListener("click",()=>{
    random = colors[Math.floor(Math.random()*colors.length)];
    while(random == old){
        random = colors[Math.floor(Math.random()*colors.length)];
    }
    old=random;
    console.log(random);
    value.innerHTML = random;
    section.style.backgroundColor = random;
});

