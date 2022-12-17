// const express = require('express');
// const app=express()


// app.get('/', function (req, res){
//     res.send('hello world')
// })

// app.get('/alien/:id', function(req, res){
//     const id=  req.params.id
   
//     if (id== 20){
//         res.send("welcome back aliens")
//     }

//     else if (id==21){
//         res.send("invalid data")
//     }
// })

// app.listen(9000, function (req, res){
//     console.log("running")
// })


// fetch('https://swapi.dev/api/people/1/')
// .then(function(res){
//     console.log("resolved", res)
//     res.json().then(function(data){
//         console.log("json done", data)
//     })
// })

// .catch(function(){
//     console.log("erros", e)
// })


// asyn

// const loadStarWars=  async () =>{
//     const res = await fetch('https://swapi.dev/api/people/1/')
//     const data=  await res.json()
//     console.log(data)
// }

// axios.get('https://swapi.dev/api/people/1/')
// .then(function(res){
//     console.log(res)
// })
const button=document.querySelector('button')
const ul = document.querySelector('#jokes-ul')


setInterval(function(){
    const getDadJokes= async () => {
        const config ={headers: {Accept: 'application/json'}}
        const res= await axios.get('https://icanhazdadjoke.com/', config)
        newLi=document.createElement('LI')
        newLi.append(res.data.joke)
        ul.append(newLi)
        // console.log(res.data.joke)   
    }
    getDadJokes()
}, 2000)

// let jokes = ''




// const getDadJokes= async () => {
//    try{
//     const config ={headers: {Accept: 'application/json'}}
//     const res= await axios.get(' https://icanhazdadjoke.com/', config)
//     return res.data.joke
//    }

//    catch (e){
//         return "error no jokes available"
//    }
// }

// const newJokes= async ()=> {
//     const newLI = document.createElement('Li')
//     getJokes = await (getDadJokes())
//     newLI.append(getJokes)
//     ul.append(newLI)
// }

// button.addEventListener('click', function(){
//     newJokes()
// })



// https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

// weather api
// const weatherData = async () => {
//     const res = await axios.get('https://api.openweathermap.org', {id})
//     console.log(res)
// }


// catfact API call 


// const catFacts= async () =>{
//     const res = await axios.get('https://catfact.ninja/facts')
//     facts = res.data.data
//     for (jokes of facts){
//         newLi = document.createElement('LI')
//         newLi.append(jokes.fact)
//         ul.append(newLi)
//     }
   
// }


// button.addEventListener('click', function (){  
//     catFacts()
// })





