import { useCriminals, getCriminals} from "./CriminalDataProvider.js"
import {criminalHTML} from "./CriminalHTML.js"





let criminalElement = document.querySelector(".criminalsContainer")

export const criminalList = () =>{

getCriminals()
.then(() =>{
    const crimArr = useCriminals()
    crimArr.forEach(criminal => {
        criminalElement.innerHTML += criminalHTML(criminal)
    });
} )



}