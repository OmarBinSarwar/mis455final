let meal = [];
function search() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json())
    .then((data) => {
        meal = data.categories;
    });

    let searchInput = document.getElementById('searchfood').value;
    let searchNumber= document.getElementById('searchnumber').value;
    let count=0;
    let searchResult = document.getElementById('card-deck');
    let searchResultHTML = '';
    meal.forEach((meal) => {
        if (meal.strCategory.toLowerCase().includes(searchInput.toLowerCase()) && count<searchNumber) {
            searchResultHTML += `
            <div class="col-md-12">
                <div class="card mb-4 shadow-sm">
                    <img src="${meal.strCategoryThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h1 class="card-title">${meal.strCategory}</h1>
                        <p class="card-text">${meal.strCategoryDescription}</p>
                    </div>
                </div>
            </div>
            `;


            count++;
        }
    });
    searchResult.innerHTML = searchResultHTML;

}