let animeName = document.getElementById('search-anime')
let searchBtn = document.getElementById('search-btn')
let anime = document.getElementById('animename')
let character = document.getElementById('character')
let quote = document.getElementById('quote')

let showAnime = () => {
    console.log(animeName.value)
    let weather_api = fetch(`https://animechan.xyz/api/random/anime?title=${animeName.value}`)
    weather_api.then((value) => {
        return value.json()
    }).then((data) => {
        console.log(data)
        anime.innerHTML = data.anime
        character.innerHTML = data.character
        quote.innerHTML = data.quote
    })

}
searchBtn.addEventListener('click', showAnime) 


let weather_data=(animeName)=>{
    let weather_api = fetch("https://animechan.xyz/api/random/anime?title=naruto")
    weather_api.then((value) => {
        return value.json()
    }).then((data) => {
        console.log(data)
        anime.innerHTML = data.anime
        character.innerHTML = data.character
        quote.innerHTML = data.quote
    })
}
weather_data(animeName.value)