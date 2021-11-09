let synth = new Tone.Synth().toMaster();

let drumOne=document.getElementById("drumOne")
drumOne.volume=1;
let drumTwo=document.getElementById("drumTwo")

let drumThree=document.getElementById("drumThree")
let drumFour=document.getElementById("drumFour")
let drumFive=document.getElementById("drumFive")

document.body.addEventListener('keypress', (event) => {
  if(event.key == 'w'){
    // synth.triggerAttackRelease('C3', '4n')
    drumThree.play();
    document.body.style.backgroundColor = "orange";
  }else if(event.key == 'e'){
    // synth.triggerAttackRelease('C4', '4n')
    drumFour.play();
    document.body.style.backgroundColor = "cyan";
  }else if(event.key == 'r'){
    // synth.triggerAttackRelease('C5', '4n')
    drumFive.play();
    document.body.style.backgroundColor = "pink";
  }else if(event.key == 'j'){ //base drum sound
    // synth.triggerAttackRelease('C5', '4n')
    drumOne.play();
    document.body.style.backgroundColor = '#c5cbe3';
  }
  else if(event.key == 'k'){ //another drum sound
    // synth.triggerAttackRelease('C5', '4n')
    drumTwo.play();
    document.body.style.backgroundColor = "green";
  }

})





let interactableOne = document.getElementById("interactableOne")
let interactableTwo = document.getElementById("interactableTwo")
let playerOne = document.getElementById("playerOne")
let playerTwo=document.getElementById("playerTwo")

interactableOne.addEventListener('mouseenter', () => {
  playerOne.play();
})

interactableOne.addEventListener('mouseleave', () => {
  playerOne.pause();
})

interactableTwo.addEventListener('mouseenter', () => {
  playerTwo.play();
})

interactableTwo.addEventListener('mouseleave', () => {
  playerTwo.pause();
})

playerOne.addEventListener('pause', () => {
  document.body.style.backgroundColor = "white";
})

playerOne.addEventListener('play', () => {
  document.body.style.backgroundColor = "black";
})

playerTwo.addEventListener('pause', () => {
  document.body.style.backgroundColor = "purple";
})

playerTwo.addEventListener('play', () => {
  document.body.style.backgroundColor = "orange";
})

player.addEventListener('timeupdate', () => {
  console.log("the current time is:", player.currentTime)

  // if(playerOne.currentTime > 5){
  //   interactableOne.style.borderRadius = "30px";
  // }
  //
  // if(playerTwo.currentTime > 5){
  //   interactableTwo.style.borderRadius = "30px";
  // }
})
