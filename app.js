let btn = document.querySelectorAll(".btn");
let rstbtn = document.querySelector("#rstbtn");
const game = document.querySelector(".container");
let msg = document.querySelector("#msg");
const newgame = document.querySelector("#newgme")

let turnX=true;
let count = 0;
const Winner = document.querySelector("#msg");

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame = ()=>{
    msg.classList.add("hide");
    newgame.classList.add("hide");
    game.classList.remove("hide");
    rstbtn.classList.remove("hide");
    enablebtn();
    count = 0;
};
const enablebtn = ()=>{
    for(let box of btn){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("clr");
    }
};
const checkwinner = ()=>{
    count++;
    for(let pattern of winPattern){
        let one = btn[pattern[0]].innerText;
        let snd = btn[pattern[1]].innerText;
        let thr = btn[pattern[2]].innerText;
        if(one !="" && snd != "" && thr != ""){
            if(one===snd && snd ===thr){
                msg.innerText = `Congratulations!! Winner is ${one}`;
                msg.classList.remove("hide");
                newgame.classList.remove("hide");
                game.classList.add("hide");
                rstbtn.classList.add("hide");
            }
        }
    }
    if(count===9){
        msg.innerText = `The match ended in a draw.`;
        msg.classList.remove("hide");
                newgame.classList.remove("hide");
                game.classList.add("hide");
                rstbtn.classList.add("hide");
    }
};
btn.forEach ((box)=>{
    box.addEventListener("click", () =>{
        console.log("Button was clicked");
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText= "O";
            turnX = true;
            box.classList.add("clr");
        }
        box.disabled=true;
        checkwinner();
    });
});

newgame.addEventListener(("click"),resetgame);
rstbtn.addEventListener(("click"),resetgame);