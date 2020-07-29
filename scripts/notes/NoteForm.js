import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const noteTitle = document.querySelector("#noteform--title")
        const noteAuthor = document.querySelector("#noteform--author")
        const noteContent = document.querySelector("#noteform--content")
        // Make a new object representation of a note
        const newNote = {
            title: noteTitle.value,
            author: noteAuthor.value,
            note: noteContent.value,
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})


const render = () =>{
    contentTarget.innerHTML = `
    <form class = "noteForm">
    <input type="text" id="noteForm--title" placeholder="Note title" />
    <input type="text" id="noteForm--author" placeholder="Your name" />
    <textarea id="noteForm--content" placeholder="Enter note"></textarea>
    <button id="saveNote">Save Note</button>
    </form>
    `
}

export const noteForm = () =>{
render()
}