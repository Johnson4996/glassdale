import {useConvictions, getConvictions} from "./ConvictionsProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")



//On the event hub listen for a change event
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeId: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})



export const convictionSelect = () => {
    getConvictions()
    .then(() => {
        const convictions = useConvictions()
        render(convictions)
    })
    
const render = convictionsCollection => {
    
    contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(crime =>{
                        return `<option value="${crime.id}">${crime.name}</option>`
                    }
                    ).join("")
                }
            </select>
        `
    }

}