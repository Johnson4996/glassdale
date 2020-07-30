import { getNotes, useNotes } from "./NoteDataProvider.js"
import { NoteHTMLConverter } from "./Note.js"

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent =>{
    NoteList()
})

export const NoteList = () =>{
    getNotes()
        .then(()=>{
            const allNotes = useNotes()
            rendered(allNotes)
        })
}

const rendered = (noteArray) =>{
    const allNotesConvertedToStrings = noteArray.map(
        (currentNote) =>{
            return NoteHTMLConverter(currentNote)
        }
    ).join("")
    contentTarget.innerHTML = allNotesConvertedToStrings
}