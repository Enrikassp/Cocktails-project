async function main() {
  const drinks = await getCocktailsAPI();
  const cocktailsCategoryList = await getCategoryAPI();
  const cocktailsGlassType = await getGlassTypeAPI();
  const cocktailsIngridientsList = await getIngridientAPI();

  fillHTML(drinks);
  fillCategoryList(cocktailsCategoryList);
  fillGlassTypeList(cocktailsGlassType);
  fillIngridientsList(cocktailsIngridientsList);
}

function fillHTML(drinks) {
  const cocktailElement = document.querySelector(".cocktailList");
  let html = "";
  for (const drink of drinks.drinks) {
    html += `<div class="cocktail shadow p-4 mb-5 bg-body-tertiary rounded">
        <img
          src="${drink.strDrinkThumb}"
          width="250"
          class="rounded"
        />

        <h3 class="mt-4 fs-20 text-center">${drink.strDrink}</h3>

        <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button" onClick='drinkMoreInfo(${drink.idDrink})' data-bs-target=".modal-dialog">Peržiūrėti detalesnę informacija</button>
        </div>
      </div>`;
  }
  cocktailElement.innerHTML = html;
}

async function drinkMoreInfo(drinkId) {
  const drinkInfo = await getCocktailsInfoAPI(drinkId);
  openDrinkModalInfo(drinkInfo);
}

function transformIngridients(drink) {
  const ingridients = [];
  for (let i = 1; i <= 15; i++) {
    const ingridient = drink[`strIngredient${i}`];

    if (ingridient) {
      ingridients.push(ingridient);
    }
  }
  return ingridients;
}

function transformMeasures(drink) {
  const measures = [];
  for (let i = 1; i <= 15; i++) {
    const measurment = drink[`strMeasure${i}`];

    if (measurment) {
      measures.push(measurment);
    }
  }
  return measures;
}

main();

async function getCocktailsByName(cocktailName){
  const cocktailList = await getCocktailsBySearchAPI(cocktailName);
  return cocktailList;
}

async function searchCocktailBy(){
  const searchInput = document.querySelector("#search-input").value;
  const cocktailList = await getCocktailsBySearchAPI(searchInput);
  const drinks = await getCocktailsAPI();
  if(searchInput == ""){
    fillHTML(drinks);
  }
  else{fillHTML(cocktailList);}
}

async function generateRandomCocktail() {
  const randomCocktail = await getRandomCocktailAPI();
  openDrinkModalInfo(randomCocktail);
}
