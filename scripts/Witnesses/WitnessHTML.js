export const witnessHTML = (witnessObj) =>{
    return `
    <section class="witness_statement">
    <h3> ${witnessObj.name} </h3>
    <p> ${witnessObj.statements} </p>
    </section>
    `
}