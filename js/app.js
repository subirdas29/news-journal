// load all header data
const fetchData = () => {
    let url = `https://openapi.programming-hero.com/api/news/categories`;

    fetch(url)
        .then(res => res.json())
        .then(data => showCategory(data.data.news_category))

};

fetchData();


// single navbar data
const showCategory = (categories) => {

    const headers = document.getElementById('all-header');
    categories?.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="px-3 py-2 lg:py-0" onclick="singleCategory('${category.category_id}')"><a class="cursor-pointer"> ${category.category_name}</a></div>
        `;
        headers.appendChild(div);
    });

}

const singleCategory = (id) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.data))

}

const showDetails = (data) => {
    const error = document.getElementById('error');
    error.textContent = ''

    if (data == '') {
        error.innerHTML = `
        <p class="mx-auto mt-20 text-center h-[60vh]"> Data not found</p>
        `
        detailsData.textContent = '';
    }
    else {

        const detailsData = document.getElementById('detailsData');
        detailsData.textContent = '';


        data?.forEach(details => {

            const div = document.createElement('div');
            div.innerHTML = `
    <div class="hero bg-base-400 border-2">
    <div class="hero-content flex-col lg:flex-row">
       <img src=${details.thumbnail_url}  class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-xl font-bold">${details.title}</h1>
        <p class="py-6">${details?.details.length > 450 ? details?.details.slice(0, 450) : details?.details}...</p>


<div class="grid grid-cols-4 gap-4">

            <div class='flex justify-between'>
        <div class="avatar">
              <div class="w-8 rounded-full">
                <img src=${details.author.img} alt="Tailwind-CSS-Avatar-component" />
               </div>
         </div>
         <div class="">
         <h3>${details.author.name}</h3>
        <p class="">${details.author.published_date}</p>
   </div>
      </div>
        <div>
        ${details.total_view}
        </div>




       









