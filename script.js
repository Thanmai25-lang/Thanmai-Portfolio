const words=[
"Frontend Developer",
"UI Designer",
"JavaScript Developer",
"Problem Solver"
];

let index=0;
let char=0;

function type(){

if(char<words[index].length){

document.getElementById("typing").textContent+=words[index].charAt(char);

char++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

if(char>0){

document.getElementById("typing").textContent=

words[index].substring(0,char-1);

char--;

setTimeout(erase,50);

}

else{

index++;

if(index>=words.length)

index=0;

setTimeout(type,500);

}

}

type();

document.getElementById("theme-btn").onclick=()=>{

document.body.classList.toggle("light");

}
