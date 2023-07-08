let age = 20

if(age <= 18){
    console.log("Tsy mahazo miditra")
}

/*
    VRAI ET VRAI = VRAI
    VRAI ET FAUX = FAUX
    FAUX ET VRAI = FAUX

    VRAI OU VRAI = VRAI
    VRAI OU FAUX = VRAI
    FAUX OU VRAI = VRAI
*/
const pays = 'mada'

if((pays === 'mada' && age >= 18) || (pays === 'USA' && age >= 16)){
    console.log('Mahazo mitondra tomobil')
}

const vola = 10000
if(vola > 6000000){
    console.log('Mampiasa Mac')
}else if(vola > 3000000){
    console.log('Mampiasa windows')
}else{
    console.log('Mampiasa linux')
}