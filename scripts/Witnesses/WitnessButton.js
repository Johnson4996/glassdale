import "./WitnessList.js";

const contentTarget = document.querySelector(".witnessButtonDiv")
const EventHub = document.querySelector(".container")

const render = () =>{
    contentTarget.innerHTML = `<button id= "witnessButton">Show Witness Statements</button>`
}

export const WitnessButton = () =>{
    render()
}

EventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "witnessButton"){
        const witnessClick = new CustomEvent ("witnessButtonClicked")
        EventHub.dispatchEvent(witnessClick)
    }
})