export const criminalHTML = (criminal) =>{
return `
<section class ="criminal_card">
    <h3 class="criminal__name">${criminal.name}</h3>
    <p class="criminal__age">Age: ${criminal.age}</p>
    <p class="criminal__crime">Crime: ${criminal.conviction}</p>
    <p class="criminal__start">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
    <p class="criminal__end">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
    <div>
                <h2>Facilities</h2>
                <ul>
                    ${criminal.facility.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
    <button id="associates--${criminal.id}">Associate Alibis</button>
</section>
<dialog class = "associatesDialog">

</dialog>
`


}