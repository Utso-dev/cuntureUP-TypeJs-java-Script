

let counterUp = document.querySelectorAll(".counter");
let convert = Array.from(counterUp);

convert.map((countitem)=>{
    let counte = 0;
    function count(){
        counte++
        countitem.innerHTML = counte;

        if(counte == countitem.dataset.number){
            clearInterval(time);
        }
    }
    let time = setInterval(()=>{
        count()
    },70)
})

// setInterval(()=>{
//    let co = 0;
//     console.log(co++);
// },300);

// ==================counter up end===================================================

// =================type js start ==============================

let typeJs = document.querySelectorAll(".typejs");
let convartJs = Array.from(typeJs);

convartJs.map((typeitem)=>{
 let countType = 0;
 let typeNow = typeitem.innerHTML.split("");

 function letsType(){
    if(countType == typeitem.dataset.typing.length){
      typeNow.pop()
      typeitem.innerHTML = typeNow.join("");
      if(typeNow == 0){
        typeitem.innerHTML += typeitem.dataset.typing.charAt(countType);
        countType =0;
      }
    }else{
        typeitem.innerHTML += typeitem.dataset.typing.charAt(countType);
        typeNow = typeitem.innerHTML.split("");
        countType++;
    }
 }
 let timeing = setInterval(()=>{
    letsType()
 },300);

})
console.log( typeof convartJs);
// ====================================type js end ==================================





