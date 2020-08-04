import { useCriminals, getCriminals} from "./CriminalDataProvider.js"
import {criminalHTML} from "./CriminalHTML.js"
import { useConvictions } from "../convictions/ConvictionsProvider.js"
import { useOfficers } from "../officers/OfficerDataProvider.js"
import "./AssociatesDialog.js";




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


    //listen for select officer 
    eventHub.addEventListener("officerChosen", officerSelected =>{
        const selectedOfficer = officerSelected.detail.officerId

        const officerArr = useOfficers()
        const foundOfficer = officerArr.find(officer =>{
            return parseInt(selectedOfficer) === officer.id
        })
        const criminalsArr = useCriminals()
       const filteredCriminals = criminalsArr.filter(criminal =>{
           return criminal.arrestingOfficer === foundOfficer.name
       })
        render(filteredCriminals)
        
    })


    eventHub.addEventListener("click", alibiClicked =>{
        if(alibiClicked.target.id.startsWith("associates--")){
            const [prompt, criminalId] = alibiClicked.target.id.split("--")
            const alibiEvent = new CustomEvent("associatesClicked",{
                detail:{
                    chosenCriminal: criminalId
                }
            })
            eventHub.dispatchEvent(alibiEvent)
        }
    })
       


    //render criminals to DOM
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