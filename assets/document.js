const change = document.getElementById('change')

change.addEventListener('change', function(){
    console.log(`changed ${change.value}`)
})

const input = document.getElementById('input')

input.addEventListener('input', function(){
    console.log(`input ${input.value}`)
})

const weatherSelect = document.getElementById('weather')
const para = document.getElementById('weather-text')
weatherSelect.addEventListener('change', function(){
    const choice = weatherSelect.value
    if (choice === "sunny") {
        para.textContent =
          "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      } else if (choice === "rainy") {
        para.textContent =
          "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      } else if (choice === "snowing") {
        para.textContent =
          "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      } else if (choice === "overcast") {
        para.textContent =
          "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      } else {
        para.textContent = "";
      }
})

const body = document.querySelector('body')
const theme = document.getElementById('theme')
theme.addEventListener('change', function(){
    if(theme.value == 'light'){
        body.style.backgroundColor = 'white'
    }else{
        body.style.backgroundColor = 'black'
    }
})
//boucle calcul puissance, factoriel


