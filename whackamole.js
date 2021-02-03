// Selectors
let sections= document.querySelectorAll(".section");
let moles= document.querySelectorAll(".mole");
let molesArray =[];
let startButton = document.querySelector("button");
let score = document.querySelector("label");


// Event Listeners
startButton.addEventListener("click", ()=>{
    score.innerText = 0;
    displayMole();
});

// Functions 
function displayMole(){
    moles.forEach((mole)=>{
        molesArray.push(mole);
    });
    
    let clear= setInterval(()=>{
    moles.forEach((mole)=>{
        mole.style.top = "100%";
    });
    molesArray[Math.round(Math.random()*5)].style.top = "10%";
    },700);
    
    moles.forEach((mole)=>{
        mole.onclick=()=>{
            mole.style.top = "100%";
            
             score.innerText= Number.parseFloat(score.innerText)+1; 
            

        };
    });
    
        if(score.innerText === 10){
            
                
            setTimeout(()=>{
            clearInterval(clear);
            moles.forEach((mole)=>{
           mole.style.top = "100%";
                
          });
            alert(`Brilliant! You have won! Your score was ${score.innerText}. Click  the start button to start again.`);
                score.innerText= 0;
          },10);    
                
            }
    else{
    setTimeout(()=>{
        clearInterval(clear);
        moles.forEach((mole)=>{
        mole.style.top = "100%";
            
        });
        alert(`Time up!! Sorry you lose! Your score was ${score.innerText}. Click the start button to start again.`)
        score.innerText= 0;
    },20000); 
        
    }
}