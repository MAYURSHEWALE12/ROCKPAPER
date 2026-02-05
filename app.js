let userscore = 0;
let compscore = 0;
let usermsg =document.querySelector("#userscore");
let compmsg =document.querySelector("#computerscore");
let msg =document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");



const genratecompchoice=()=>{
    const options =["rock","paper","scissors"]
    const randindex=Math.floor(Math.random()*3);
    return options[randindex];
}

//draw game
const drawgame =()=>{
    console.log("Game was draw");
    msg.innerText ="Game has been draw";
    msg.style.backgroundColor ="white";
}
const showwinner =(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("You win");
        msg.innerText =`You Win ! Your ${userchoice} beats Computers ${compchoice}`;
        msg.style.backgroundColor ="green";
        userscore = userscore+1;
        usermsg.innerHTML=userscore;
    }else{
        console.log("Computer win");
        msg.innerText =`You lost. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor ="red";
        compscore = compscore+1;
        compmsg.innerHTML = compscore;
    }
}

const playgame = (userchoice)=>{
    console.log("user choice = ",userchoice);
    const compchoice = genratecompchoice();
    console.log("computer choice = ",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors , papaer
            userwin = compchoice ==="paper" ? false :true ;
        }else if(userchoice==="paper"){
            userwin = compchoice ==="scissors" ? false : true ;
        }else{
            userwin = compchoice ==="rock" ? false :true ;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});

