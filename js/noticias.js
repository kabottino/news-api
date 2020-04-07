//function pegarNoticias(){

// let noticias = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=a6f9a877801943adacdb6bbcff61d1a3')
// .then((resposta)=>{
//     return resposta.json()
// })
// .then((dadosEmJson)=>{
//     dadosEmJson.articles.forEach((noticias, index) => {
//         console.log ("Titulo Noticia:" + noticias.title)
//         console.log ("descrição Noticia:" + noticias.description)
//         console.log ("Link da Imagem:" + noticias.urlToImage)
//     });

// })


//}

let containerDeNoticias = document.getElementById('listadeNoticias')

async function pegarNoticias(){

    let noticias = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f9a877801943adacdb6bbcff61d1a3')
    
    let listaDeNoticias = await noticias.json()

    listaDeNoticias.articles.forEach((noticia)=>{

        let coluna = document.createElement('div')
        coluna.setAttribute('class', 'col-3')

        let card = document.createElement('div')
        card.setAttribute('class', 'card')

        let imgCard = document.createElement('img')
        imgCard.setAttribute('class', 'card-img-top')
        imgCard.setAttribute('src', noticia.urlToImage)

        let bodyCard = document.createElement('div')
        bodyCard.setAttribute('class', 'card-body')

        let titleCard = document.createElement('h5')
        titleCard.setAttribute('class', 'card-title')
        titleCard.textContent = noticia.title

        let descriptionCard = document.createElement('p')
        descriptionCard.setAttribute('class', 'card-text')
        descriptionCard.textContent = noticia.description

        let linkCard = document.createElement('a')
        linkCard.setAttribute('class', 'btn btn-primary')
        linkCard.setAttribute('href', noticia.url)
        linkCard.textContent = "Ler mais"

        card.appendChild(imgCard)
        card.appendChild(bodyCard)
        bodyCard.appendChild(titleCard)
        bodyCard.appendChild(descriptionCard)
        bodyCard.appendChild(linkCard)

        coluna.appendChild(card)
        
        containerDeNoticias.appendChild(coluna)


                //  console.log ("Titulo Noticia:" + noticias.title)
                //  console.log ("descrição Noticia:" + noticias.description)
                //  console.log ("Link da Imagem:" + noticias.urlToImage)

    })
}

