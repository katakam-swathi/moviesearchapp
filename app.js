const api_key= 'http://www.omdbapi.com/?apikey=fbc6365a'

const input=document.getElementById('input')
const button=document.getElementById('search')
const maindiv=document.getElementById('maindiv')

button.addEventListener('click',()=>{
   removeAll()
  const movie_name=input.value
  const app=get_data(movie_name)
  app.then(obj => {
   obj.forEach(movie=>{
   createcard(movie)
   });
  })
})

function createcard(movie){

    const outerdiv =document.createElement('div')
    outerdiv.className = "moviecard"

    const image = document.createElement("img")
    image.className = "movieimage"
    image.setAttribute('src',movie.Poster)  
    outerdiv.appendChild(image)

    const innerdiv = document.createElement('div')
    innerdiv.className = "innerdiv"
    outerdiv.appendChild(innerdiv)

    const movieptag = document.createElement('p')
    movieptag.className = "moviename"
    movieptag.innerHTML = movie.Title
    innerdiv.appendChild(movieptag)

    const yearptag = document.createElement('p')
    yearptag.className = "movieyear"
    yearptag.innerHTML =movie.Year
    innerdiv.appendChild(yearptag)

    const typeptag = document.createElement('p')
    typeptag.className = "movietype"
    typeptag.innerHTML = movie.Type
    innerdiv.appendChild(typeptag)
    
    maindiv.appendChild(outerdiv) 
}

function removeAll(){
    while(maindiv.firstChild){
        maindiv.removeChild(maindiv.lastChild)
    }
}


const get_data= async (title) => {
    const resp= await fetch(`${api_key}&s=${title}`)
    const data= await resp.json()
    return data.Search
}



const get_movie = async (movieid) => {
    const movieresp = await fetch(`${api_key}&i=${movieid}`)
    const moviedata = await movieresp.json()
    return moviedata
}


get_data("no time to die")
