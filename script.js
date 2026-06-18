let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice = () => {
     const options = ["rock", "paper", "scissors"];
     const randomc = Math.floor(Math.random() * 3);
return options [randomc];    }

const drawgame = () => {
    msg.innerText = "It was a Draw. Play AGAIN";
    msg.style.backgroundColor = "white";
}

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "#90EE90";
        msg.style.innerText = "black";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lose. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "#ff746c";
    }
 }

const playGame = (userchoice) => {
    console.log("user choice =", userchoice);
const compchoice = gencompchoice ();
     console.log("computer choice =", compchoice);

if(userchoice == compchoice){
    drawgame();
} else {
let userwin = true;
if(userchoice ==="rock") {
userwin = compchoice === "paper"? false : true ;}
else if (userchoice === "paper"){
    userwin = compchoice === "scissors" ? false : true;

} else {userwin = compchoice === "rock"? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
}
};

choices.forEach((choice) =>{  
    choice.addEventListener("click", ()=>{
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
    });
});