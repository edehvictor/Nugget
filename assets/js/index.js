const general = document.querySelector('#general');
const entertain = document.querySelector('#entertain');
const sport = document.querySelector('#sport');
const tech = document.querySelector('#tech');
const business = document.querySelector('#business');
const display = document.querySelector('.display')
const searchBtn = document.querySelector('#searchBtn')
const newsQuery = document.querySelector('#newsQuery')
const newsType = document.querySelector('.newsType')
const navbarBrand = document.querySelector('.navbar-brand')
const lastSection = document.querySelector('.last-section')



var newsDataArr = []

window.onload = function () {
    fetchHeadLinesNews()
   
}
// API
const apiKey = '091a4cc79cc24c52aa024a2ab4b2c197';


general.addEventListener('click', () => {
    fetchGeneralNews();
   
})

business.addEventListener('click', () => {
    fetchBusinessNews()
  
})

entertain.addEventListener('click', () => {
    fetchEntertainmentnews()
    
})

sport.addEventListener('click', () => {
    fetchSportNews()
    
})

tech.addEventListener('click', () => {
    fetchTechNews()
  
})

searchBtn.addEventListener('click', () => {
   fetchNewsQuery()
   
})

// headlines
function fetchHeadLinesNews() {
    const appId = '091a4cc79cc24c52aa024a2ab4b2c197'
    const url = 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=091a4cc79cc24c52aa024a2ab4b2c197';

    // axios returns a Promise
    axios({
        method: 'get',
        url, //the same url as stated in url
        params: {
            appid: appId,
            headers: {
                Upgrade: 'HTTP/2.0',
            }
        }
    })
        .then((value) => {
            if (value) {
                displaynews(value.data.articles)
                newsType.innerHTML = 'Headlines'
                lastSection.style.display ='block'
            }
        })
        .catch((error) => console.log(error))
}



function fetchGeneralNews() {
    const appId = '091a4cc79cc24c52aa024a2ab4b2c197'
    const url = 'https://newsapi.org/v2/top-headlines?country=ng&category=general&apiKey=091a4cc79cc24c52aa024a2ab4b2c197';

    // axios returns a Promise
    axios({
        method: 'get',
        url, //the same url as stated in url
        params: {
            appid: appId, //the same url as stated in appId
            //get value in deg celsuis
        }
    })
        .then((value) => {
            if (value) {
                displaynews(value.data.articles)
                newsType.innerHTML = 'General News'
                lastSection.style.display ='block'
            }
        })
        .catch((error) => console.log(error))
}



//     // businessNews
function fetchBusinessNews() {
    const appId = '091a4cc79cc24c52aa024a2ab4b2c197'
    const url = 'https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=091a4cc79cc24c52aa024a2ab4b2c197';

    // axios returns a Promise
    axios({
        method: 'get',
        url, //the same url as stated in url
        params: {
            appid: appId, //the same url as stated in appId
        }
    })
        .then((value) => {
            if (value) {
                displaynews(value.data.articles)
                newsType.innerHTML = 'Business News'
                 lastSection.style.display ='block'
            }
        })
        .catch((error) => console.log(error))

}

// technology
function fetchTechNews() {
    const appId = '091a4cc79cc24c52aa024a2ab4b2c197'
    const url = 'https://newsapi.org/v2/top-headlines?country=NG&category=technology&apiKey=091a4cc79cc24c52aa024a2ab4b2c197';

    // axios returns a Promise
    axios({
        method: 'get',
        url, //the same url as stated in url
        params: {
            appid: appId, //the same url as stated in appId
        }
    })
        .then((value) => {
            if (value) {
                displaynews(value.data.articles)
                newsType.innerHTML = 'Technology News'
                lastSection.style.display ='block'
            }
        })
        .catch((error) => console.log(error))

}

// entertain
function fetchEntertainmentnews() {
    const appId = '091a4cc79cc24c52aa024a2ab4b2c197'
    const url = 'https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=091a4cc79cc24c52aa024a2ab4b2c197';

    // axios returns a Promise
    axios({
        method: 'get',
        url, //the same url as stated in url
        params: {
            appid: appId, //the same url as stated in appId
        }
    })
        .then((value) => {
            if (value) {
                displaynews(value.data.articles)
                newsType.innerHTML = 'Entertainment News'
                lastSection.style.display ='block'
            }
        })
        .catch((error) => console.log(error))

}

// sportsNews
function fetchSportNews() {
    const appId = '091a4cc79cc24c52aa024a2ab4b2c197'
    const url = 'https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=091a4cc79cc24c52aa024a2ab4b2c197';

    // axios returns a Promise
    axios({
        method: 'get',
        url, //the same url as stated in url
        params: {
            appid: appId, //the same url as stated in appId
        }
    })
        .then((value) => {
            if (value) {
                displaynews(value.data.articles)
                newsType.innerHTML = 'Sports News'
                lastSection.style.display ='block'
            }
        })
        .catch((error) => console.log(error))

}

// searchBtn
function fetchNewsQuery() {
    const appId = '091a4cc79cc24c52aa024a2ab4b2c197'
    const url = 'https://newsapi.org/v2/everything?q=newsQuery.innerHt&apiKey=091a4cc79cc24c52aa024a2ab4b2c197';

    // axios returns a Promise
    axios({
        method: 'get',
        url, //the same url as stated in url
        params: {
            appid: appId, //the same url as stated in appId
        }
    })
        .then((value) => {
            if (value) {
                displaynews(value.data.articles)
                console.log(value)
            }
        })
        .catch((error) => console.log(error))

}

function displaynews(details) {
    display.innerHTML = ""
    newsDataArr = details
    newsDataArr.forEach(news => {
        console.log(news)

        var col = document.createElement('div')
        col.className = "col-sm-12 col-md-4 col-lg-3 round-4 p-4 card"
      

        var card = document.createElement('div')
        card.className = "p-2"
    

        var image = document.createElement('img')
        image.setAttribute('height', 'marchparnt')
        image.setAttribute('width', '100%');
        image.src = news.urlToImage

        var cardBody = document.createElement('div')
        

        var newsHeading = document.createElement('h5')
        newsHeading.className = 'card-title'
        newsHeading.innerHTML = news.title

        var description = document.createElement('p')
        description.className = 'text-muted'
        description.innerHTML = news.description

        var link = document.createElement('a')
        link.className = 'btn btn-outline-info'
        link.setAttribute('target', '_blank')
        link.href = news.url
        link.innerHTML = "Read more"

        cardBody.appendChild(newsHeading)
        cardBody.appendChild(description)
        cardBody.appendChild(link)

        card.appendChild(image)
        card.appendChild(cardBody)

        col.appendChild(card)
        display.appendChild(col)

    })
}

navbarBrand.addEventListener('click', fetchHeadLinesNews)

function hideSpinner() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.weather-content-wrap').style.display ='block'
}