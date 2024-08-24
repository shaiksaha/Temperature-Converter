let work=document.getElementById("cel");
let work1=document.getElementById("fah");

work.addEventListener("input",function(){
let c=this.value;
let f = (c * 9/5) + 32; 
work1.value=f;

});
work1.addEventListener("input",function(){
    let f=this.value;
let c = (f - 32) * 5/9; 
work.value=c;
    
    });