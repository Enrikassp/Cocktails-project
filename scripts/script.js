async function main() {
  const drinks = await getCocktailsAPI();
  console.log(drinks);
  fillHTML(drinks);
}

function fillHTML(drinks) {
  const cocktailElement = document.querySelector(".cocktailList");
  let html = "";
  for (const drink of drinks.drinks) {
    // console.log(drink);
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

function openDrinkModalInfo(drinkInfo) {
  const modalElement = document.getElementById("drinkModal");
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
  updateModalBody(drinkInfo);
}

function updateModalBody(drinkInfo) {
  const modalBody = document.querySelector(".modal-body");
  let html = "";
  const drinkData = drinkInfo.drinks;

  for (const drink of drinkData) {
    const ingridients = transformIngridients(drink);
    const measurements = transformMeasures(drink);

    html += `<img
    src="${drink.strDrinkThumb}"
    height="200"
  />

  <article class="modalDescription mt-3">
    <h5>
      Pavadinimas:
      <span class="text-body-secondary fs-5">${drink.strDrink}</span>
    </h5>
    <h5>
      Kategorija:
      <span class="text-body-secondary fs-5">${drink.strCategory}</span>
    </h5>
    <h5>
      Alkoholinis gerimas:
      <span class="text-body-secondary fs-5">${drink.strAlcoholic}</span>
    </h5>
    <h5>
      Instrukcijos:
      <span class="text-body-secondary fs-6">
        ${drink.strInstructions}
      </span>
    </h5>
    <h5>Ingredientai:</h5>
    <ul>
      ${ingridients.map((ingridient) => `<li>${ingridient}</li>`).join("")}
    </ul>
    <h5>Matavymai:</h5>
    <ul>
      ${measurements.map((measurement) => `<li>${measurement}</li>`).join("")}
    </ul>
    <h5>
      Redaguota Data:
      <span class="text-body-secondary fs-6">
        ${drink.dateModified}
      </span>
    </h5>
  </article>`;
  }
  modalBody.innerHTML = html;
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

function generateRandomCocktail() {
  // PADARYTI RANDOM KOKTEILIO GENERAVIMA SU MODULINIU LANGU
}
