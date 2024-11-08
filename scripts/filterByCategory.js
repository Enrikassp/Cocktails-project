function fillCategoryList(cocktailsCategoryList){
    const categoryList = document.querySelector("#cocktailCategoryList");
    let selectOptions = "";
    for(const category of cocktailsCategoryList.drinks){
      selectOptions += `<option>${category.strCategory}</option>`;
    }
    categoryList.innerHTML += selectOptions;
  }

  async function filterByCategoryCocktails(){
    const selectContainer = document.querySelector("#cocktailCategoryList").value;
    const cocktailList = await getCocktailsByCategoryAPI(selectContainer);
    const drinks = await getCocktailsAPI();
    if(selectContainer == "Pasirinkite kategoriją"){
      fillHTML(drinks);
    }
    else{fillHTML(cocktailList);}
  }