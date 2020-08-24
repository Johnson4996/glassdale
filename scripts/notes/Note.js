import { deleteNote } from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")

export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
        <button class="delete--${noteObject.id}">X</button>
            <div class="note--title">Title: ${ noteObject.title }</div>
            <div class="note--content">${ noteObject.note }</div>
            <div class="note--author">Author: ${ noteObject.author }</div>
            <div class="note--criminal"> Criminal: ${noteObject.criminal.name}</div>
            <div class="note--timestamp">Timestamp: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
        </section>
    `

}

eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.className.startsWith("delete--")){
        const noteSelected = clickEvent.target.className.split("--")[1]
        deleteNote(noteSelected)
    }
})
   

