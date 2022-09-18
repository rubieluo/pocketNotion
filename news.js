let country = "ca";

run(); 
var locationArr = document.querySelector('#searchTextField').value.split(',');

document.querySelector('#searchTextField').addEventListener('change', (event) => {
    locationArr = document.querySelector('#searchTextField').value.split(',');
    country = locationArr[1];
    run();
});

function run() {
    fetch('https://gnews.io/api/v4/top-headlines?country=' + country + '&lang=en&token=82e2a218b70720574681852246d3412f')
.then(function (response) {
    return response.json();
})
.then(function (data) { 
    appendData(data);
})



function appendData(data) {
    document.getElementById("headline").innerHTML = data.articles[0].title;
    document.getElementById("details").innerHTML = data.articles[0].content;
    document.getElementById("news-link").href = data.articles[0].url;

    document.getElementById("news-link").onclick = function(e) { 
        chrome.tabs.create({url: data.articles[0].url});
    }

    document.getElementById("headline2").innerHTML = data.articles[1].title;
    document.getElementById("details2").innerHTML = data.articles[1].content;
    document.getElementById("news-link2").href = data.articles[1].url;

    document.getElementById("news-link2").onclick = function(e) { 
        chrome.tabs.create({url: data.articles[1].url});
    }

    document.getElementById("headline3").innerHTML = data.articles[2].title;
    document.getElementById("details3").innerHTML = data.articles[2].content;
    document.getElementById("news-link3").href = data.articles[2].url;

    document.getElementById("news-link3").onclick = function(e) { 
        chrome.tabs.create({url: data.articles[2].url});
    }

    document.getElementById("headline4").innerHTML = data.articles[3].title;
    document.getElementById("details4").innerHTML = data.articles[3].content;
    document.getElementById("news-link4").href = data.articles[3].url;

    document.getElementById("news-link4").onclick = function(e) { 
        chrome.tabs.create({url: data.articles[3].url});
    }

    document.getElementById("headline5").innerHTML = data.articles[4].title;
    document.getElementById("details5").innerHTML = data.articles[4].content;
    document.getElementById("news-link5").href = data.articles[4].url;

    document.getElementById("news-link5").onclick = function(e) { 
        chrome.tabs.create({url: data.articles[4].url});
    }

}

}
