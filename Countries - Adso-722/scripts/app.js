import { countries } from "../scripts/countries.js";

const frmFilters= document.querySelector('form').addEventListener('submit',event=>event.preventDefault)
const inputFilter=document.getElementById('input-filter')
const orderby=document.getElementById('')


const makeCountry= (country) =>{
    const container = document.createElement('div')
    container.classList.add('card-country')
    container.addEventListener('mouseenter',showInfo)

    const imgContainer= document.createElement('img')
    imgContainer.src=country.flag
    imgContainer.alt=country.name
    
    const nameContainer= document.createElement('h2')
    nameContainer.textContent = country.name

    container.appendChild(imgContainer)
    container.appendChild(nameContainer)

    document.querySelector('main > section').appendChild(container)
    
   
}

const rendercontries =()=>{
    countries.forEach(country => makeCountry(country));
}


//.children llama los hijos que tiene el html o un arreglo en este caso
const showInfo=(event)=> {
let currentContry =event.target.children[1].textContent
let foudContry= countries.find(contry=> contry.name === currentContry)


const countrys=document.querySelector('#demographics')
countrys.children[0].textContent=foudContry.name
countrys.children[1].textContent=foudContry.capital
countrys.children[2].textContent=foudContry.population


}


//no carga hasta que todo el dom este listo o asi entendi jajaja

window.addEventListener('DOMContentLoaded',rendercontries)