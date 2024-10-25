async function main(){
  const drinks = await getCocktailsAPI();
  const drinksInfo = await getCocktailsInfoAPI();
  console.log(drinks);
  fillHTML(drinks);
}

function fillHTML(drinks){
  const cocktailElement = document.querySelector(".cocktailList");
  let html = "";
  for(const drink of drinks.drinks){
    // console.log(drink);
    html += `<div class="cocktail shadow p-4 mb-5 bg-body-tertiary rounded">
        <img
          src="${drink.strDrinkThumb}"
          width="250"
          class="rounded"
        />

        <h3 class="mt-4 fs-20 text-center">${drink.strDrink}</h3>
      </div>`
  }
  cocktailElement.innerHTML = html;
  
}


main();