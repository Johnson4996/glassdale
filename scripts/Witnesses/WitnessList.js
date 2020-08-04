import { getWitnesses, useWitnesses } from "./WitnessProvider.js";



const contentTarget = document.querySelector(".criminalsContainer")
const EventHub = document.querySelector(".container")

EventHub.addEventListener("witnessButtonClicked", event =>{
    render()
})


const render = () =>{
    let allWitnesses = []
    getWitnesses()
    .then(()=>{
        allWitnesses = useWitnesses()
    })


    console.log(allWitnesses)
}