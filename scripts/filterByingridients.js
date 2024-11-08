function fillIngridientsList(cocktailsIngridientsList){
    const categoryList = document.querySelector("#ingridientList");
    let selectOptions = "";
    for(const category of cocktailsIngridientsList.drinks){
      selectOptions += `<option>${category.strIngredient1}</option>`;
    }
    categoryList.innerHTML += selectOptions;
  }

  async function filterByIngridientsCocktails(){
    const selectContainer = document.querySelector("#ingridientList").value;
    const cocktailList = await getCocktailsByIngridientAPI(selectContainer);
    const drinks = await getCocktailsAPI();
    if(selectContainer == "Pasirinkite ingridientą"){
      fillHTML(drinks);
    }
    else{fillHTML(cocktailList);}
  }