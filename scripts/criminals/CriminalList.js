import { useCriminals, getCriminals} from "./CriminalDataProvider.js"
import {criminalHTML} from "./CriminalHTML.js"
import { useConvictions } from "../convictions/ConvictionsProvider.js"




const  eventHub = document.querySelector(".container")
let criminalElement = document.querySelector(".criminalsContainer")


eventHub.addEventListener('crimeChosen' , crimeSelected =>{
//store crime that was chosen
       const selectedCrime = crimeSelected.detail.crimeId
       
       // get the actual crime name from the crimeId
       const crimeArr = useConvictions()
       const foundCrimeObject = crimeArr.find(crime =>{
           return parseInt(selectedCrime) === crime.id
       })
        
       const criminalsArr = useCriminals()
       const filteredCriminals = criminalsArr.filter(criminal =>{
           return criminal.conviction === foundCrimeObject.name
       })
        render(filteredCriminals)
    })
       



       const render = (arrayOfCriminals) =>{
           let criminalHTMLrep = ""
           arrayOfCriminals.forEach(criminal =>{
               criminalHTMLrep += criminalHTML(criminal)
           })

           criminalElement.innerHTML = `${criminalHTMLrep}`
       }

    



export const criminalList = () =>{

getCriminals()
.then(() =>{
    const crimArr = useCriminals()
    crimArr.forEach(criminal => {
        criminalElement.innerHTML += criminalHTML(criminal)
    });
} )



}