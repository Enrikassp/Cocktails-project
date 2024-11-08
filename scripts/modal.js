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