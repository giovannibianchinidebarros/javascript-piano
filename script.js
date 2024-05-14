
let pianoContainer = document.querySelector(".piano-container")
const SOUNDS_PATH = "./sounds"

let whiteKeys = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", 
                "C4", "D4", "E4", "F4", "G4", "A4", "B4"]

let blackKeys = ["Db3","Eb3","Gb3","Ab3","Bb3",
                "Db4","Eb4","Gb4","Ab4","Bb4"]


function playSound(sound){
    let audio = new Audio(`${SOUNDS_PATH}/${sound}.mp3`);
    audio.play();
}


window.onload = () => {
    for (let i of whiteKeys) {
        let div = document.createElement("div");
        div.classList.add("white-key", i);
        pianoContainer.appendChild(div);
        div.addEventListener("click", function(){
            playSound(i);
        });
    }

    for( let i of blackKeys){
        let div = document.createElement("div");
        div.classList.add("black-key", i);
        pianoContainer.appendChild(div);
        div.addEventListener("click", function(){
            playSound(i);
        });
    }
}
