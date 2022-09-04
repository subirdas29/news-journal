// load all header data
const fetchData = () => {
    let url = `https://openapi.programming-hero.com/api/news/categories`;

    fetch(url)
        .then(res => res.json())
        .then(data => showCategory(data.data.news_category))

};

fetchData();