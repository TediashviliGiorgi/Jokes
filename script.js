const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', function () {
    generateJoke()
})


    async function generateJoke () {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const res = fetch('https://icanHazdadjoke.com', config)

    const data = await (await res).json()
    
    jokeEl.innerHTML = data.joke
       
}



// function generateJoke () {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanHazdadjoke.com', config).then(res =>{
//         res.json().then(data =>{
//             jokeEl.innerHTML = data.joke
//         })
//     })
// }

