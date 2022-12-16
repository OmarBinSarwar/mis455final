function search() {
    
    let searchInput = document.getElementById('searchfood').value;

    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        display(data.meals);
    });
}
function display(meal) {
    
    let searchNumber= document.getElementById('searchnumber').value;
    let count=0;
    let searchResult = document.getElementById('card-deck');
    let searchResultHTML = '';
    meal.forEach((meal) => {
        if(count<searchNumber){
            searchResultHTML += `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h1 class="card-title">${meal.strMeal}</h1>
                </div>
            </div>
            `;
            count++;
        }
    });
    searchResult.innerHTML = searchResultHTML;
}
