import {
    getNotes,
    useNotes
} from "./NoteDataProvider.js"
import {
    NoteHTMLConverter
} from "./Note.js"
import {
    useCriminals
} from "../criminals/CriminalDataProvider.js"

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

let allNotes = []

eventHub.addEventListener("showNotesClicked", customEvent => {
    render()
})

eventHub.addEventListener("noteStateChanged", customEvent => {
    allNotes = useNotes()
    render()
})

export const NoteList = () => {
    getNotes()
        .then(() => {
            allNotes = useNotes()
        })
}

const render = () => {
    const allNotesConvertedToHTML = allNotes.map(
        (currentNote) => {
            getNoteCriminal(currentNote)
            return NoteHTMLConverter(currentNote)
        }
    ).join("")
    contentTarget.innerHTML = allNotesConvertedToHTML
}

const getNoteCriminal = (note) => {
    let criminals = useCriminals()
    const foundCriminal = criminals.find(crim => {
        return crim.id === note.criminalId
    })
    note.criminal = foundCriminal
    return note
}