import { saveNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const noteTitle = document.querySelector("#noteForm--title")
        const noteAuthor = document.querySelector("#noteForm--author")
        const noteContent = document.querySelector("#noteForm--content")
        const crimId = document.querySelector("#noteForm--criminal")
        const [prompt, criminalId] = crimId.value.split("--")
        // Make a new object representation of a note
        const newNote = {
            title: noteTitle.value,
            author: noteAuthor.value,
            note: noteContent.value,
            timestamp: Date.now(),
            criminalId: parseInt(criminalId)
            
        }

        // Change API state and application state
        saveNote(newNote)
    }
})





const render = () =>{
    getCriminals().then(()=>{const allCriminals = useCriminals()
    
    contentTarget.innerHTML = `
    <form class = "noteForm">
    <input type="text" id="noteForm--title" placeholder="Note title" />
    <input type="text" id="noteForm--author" placeholder="Your name" />
    <textarea id="noteForm--content" placeholder="Enter note"></textarea>
    <select id="noteForm--criminal" class="criminalSelect">
    <option value="0">Please select a criminal</option>
    ${
        allCriminals.map(criminal =>{
            return `<option value="criminal--${ criminal.id }">${ criminal.name }</option>
         `}).join("")
    }
    </select>
    <button id="saveNote">Save Note</button>
    </form>`
})
}

export const noteForm = () =>{
render()
}

