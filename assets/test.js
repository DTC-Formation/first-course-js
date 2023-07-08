let nbr = 12
let text = "coucou"
let isMajeur = false

let somme = nbr + 97
console.log(nbr + text)
console.log('11'+'1')

let tab = [1, 2, 5, 'dsfq', false]
console.log(tab)

let personne = {
    nom: 'fana',
    prenom:'ntenana',
    age: 25,
    estMajeur: true,
    vola: 2000
}

let test1 = 5
const test2 = 5

const valiny = 10/3

/**
 * VRAI ET VRAI = VRAI
 * VRAI ET FAUX = FAUX
 * VRAI OU VRAI = VRAI
 * VRAI OU FAUX = VRAI
 */
if(personne.age > 18 && personne.vola == 3000){
    console.log('Tafiditra')
}

const bouton = document.getElementById('bouton')
let inputPays = document.getElementById('pays')
let inputAge = document.getElementById('age')
bouton.addEventListener('click', function(e){
    e.preventDefault();
    // USA Mada
    let pays = inputPays.value 
    let age = inputAge.value
    const par = document.querySelector('p')
    //Vous avez le droit de conduire
    if(pays == 'USA' && age >= 16){
        par.textContent = 'Vous avez le droit de conduire'
    }
    else if(pays == 'Mada' && age != 18){
        par.textContent = 'Vous avez le droit de conduire'
    }
    else{
        par.textContent = 'Vous n\'avez pas le droit de conduire'
    }
    const utilisateurs = document.getElementById("utilisateurs")
    console.log(utilisateurs.innerHTML)
    utilisateurs.innerHTML = utilisateurs.innerHTML + '<p>Age: '+age+' Pays: '+pays+'</p>'
})

const select = document.getElementsByClassName('select')
select[0].addEventListener('change', function(){
    console.log(select[0].value)
})
inputPays.addEventListener('change', function(){
    console.log(inputPays.value)
})
inputAge.addEventListener('input', function(){
    console.log(inputAge.value)
})


