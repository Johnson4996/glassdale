const contentTarget = document.querySelector(".noteFormContainer")

const render = () =>{
    contentTarget.innerHTML = `
    <form class = "noteForm">
    <label for ="date"> Date:</label>
    <input type= "date" name="date" id="date">
    <label for = "text"> Note:</label>
    <input type="text" name="note" id="note">
    <label for ="suspect">Suspect:</label>
    <input type= "text" name="suspect" id="suspect">
    <button id="saveNote">Save Note</button>
    </form>
    `
}

export const noteForm = () =>{
render()
}