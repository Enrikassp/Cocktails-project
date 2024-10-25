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
  document
    .getElementById("footerCloseButton")
    .addEventListener("click", () => modal.hide());

  updateModalBody(drinkInfo);
}

function updateModalBody(drinkInfo) {
  const modalBody = document.querySelector(".modal-body");

  // Užpildyti modalinio lango su informacija
  //   <img
  //   src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
  //   height="200"
  // />

  // <article class="modalDescription mt-3">
  //   <h5>
  //     Pavadinimas:
  //     <span class="text-body-secondary fs-5">Margarita</span>
  //   </h5>
  //   <h5>
  //     Kategorija:
  //     <span class="text-body-secondary fs-5">Margarita</span>
  //   </h5>
  //   <h5>
  //     Alkoholinis gerimas:
  //     <span class="text-body-secondary fs-5">Alcoholic</span>
  //   </h5>
  //   <h5>
  //     Instrukcijos:
  //     <span class="text-body-secondary fs-6">
  //       Rub the rim of the glass with the lime slice to make the salt
  //       stick to it. Take care to moisten only the outer rim and
  //       sprinkle the salt on it. The salt should present to the lips
  //       of the imbiber and never mix into the cocktail. Shake the
  //       other ingredients with ice, then carefully pour into the
  //       glass.
  //     </span>
  //   </h5>
  //   <h5>Ingredientai:</h5>
  //   <ul>
  //     <li>Tequila</li>
  //     <li>Triple sec</li>
  //     <li>Lime juice</li>
  //     <li>Salt</li>
  //   </ul>
  // </article>
}

main();
