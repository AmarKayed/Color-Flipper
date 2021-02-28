const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.querySelector(".btn");
const background = document.querySelector("section");
const value = document.querySelector(".value");
// console.log(hexValues);


btn.addEventListener("click",()=>{
    let hexScore = "#";
    for(let i=0;i<6;i++){
        hexScore +=hexValues[Math.floor(Math.random()*hexValues.length)];
    }
    value.innerHTML = hexScore;
    background.style.backgroundColor=hexScore;
    console.log(hexScore);
});

