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
    const Categorylength = document.getElementById('category-length');

    error.textContent = ''

    if (data == '') {
        error.innerHTML = `
        <p class="mx-auto mt-20 text-center h-[60vh]"> Data not found</p>
        `
        Categorylength.textContent = '';
        detailsData.textContent = '';
    }
    else {

        Categorylength.innerHTML = `
        <p class="mx-auto my-5 p-5  text-black  bg-white"> ${data.length} Items fountd catagory items</p>
        `

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


        <div>
        <div class="rating rating">
        <input type="radio" name="rating-9" class="rating-hidden" />
        <input type="radio" name="rating-9" class="mask mask-star-2" />
        <input type="radio" name="rating-9" class="mask mask-star-2" checked />
        <input type="radio" name="rating-9" class="mask mask-star-2" />
        </div>
    </div>

    <div>
        <button for="my-modal-3"  class="text-white" onclick="news('${details._id}')"> 
            <label for="my-modal-3" class="btn modal-button"> News   &#8594;</label>
        </button>
    </div>
 
 </div>
  
  
</div>
    `;
            detailsData.appendChild(div);
        });

    }

}
const news = (id) => {
    const url = ` https://openapi.programming-hero.com/api/news/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => newsModal(data.data[0]))

}
const newsModal = (details) => {
    // console.log(data[0])
    const SingleModal = document.getElementById('SingleModal');

    SingleModal.innerHTML = `
 <div class="hero bg-base-200">
 <div class="hero-content flex-col lg:flex-row">
   <img src=${details.thumbnail_url}  class="max-w-sm rounded-lg shadow-2xl" />
   <div>
     <h1 class="text-xl font-bold">${details.title}</h1>
     <p class="py-6">${details?.details.length > 450 ? details?.details.slice(0, 450) : details?.details} ...</p>
     

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
</div>
 `
}












