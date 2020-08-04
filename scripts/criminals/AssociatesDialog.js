import { useCriminals } from "./CriminalDataProvider.js"

const  eventHub = document.querySelector(".container")


eventHub.addEventListener("associatesClicked", customEvent =>{
    const contentTarget = document.querySelector(".associatesDialog")
    const criminalId = customEvent.detail.chosenCriminal

    const foundCriminal = useCriminals().find(criminal => criminal.id ===parseInt(criminalId)
    )

    contentTarget.innerHTML = foundCriminal.known_associates.map(associate =>{
        return `
        <h4 class="assoc__name">Associate Name: ${associate.name}</h4>
        <div class="assoc__detail">Alibi: ${associate.alibi}</div>
        
        `
    }).join("")
    contentTarget.innerHTML += `<button id="close_alibi">Close</button>`
    contentTarget.showModal()
})

eventHub.addEventListener("click", closeAlibi=>{
if(closeAlibi.target.id === "close_alibi"){
    const contentTarget = document.querySelector(".associatesDialog")
    contentTarget.close()
}
})