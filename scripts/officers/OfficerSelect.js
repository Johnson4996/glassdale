import {getOfficers , useOfficers } from "./OfficerDataProvider.js"

const eventHub = document.querySelector(".container")
const officersElement = document.querySelector(".filters__officer")

//Waits for officer to be selected
eventHub.addEventListener("change", event => {
if(event.target.id === "officerSelect"){
    const customEvent = new CustomEvent ("officerChosen", {
        detail:{
            officerId: event.target.value
        }
    })
    eventHub.dispatchEvent(customEvent)
}
})



export const officerSelect = () =>{
    getOfficers()
    .then(()=>{
        const allOfficers = useOfficers()
        renderOfficers(allOfficers)
    })


    const renderOfficers = (officersArr) =>{
        officersElement.innerHTML += `<select class="dropdown" id="officerSelect">
        <option value="0">Please select an officer...</option>
        ${
            officersArr.map(officer =>{
                return `<option value="${officer.id}">${officer.name}</option>`
            }
            ).join("")
        }
    </select>
`
    }
}

