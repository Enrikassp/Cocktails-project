function fillGlassTypeList(cocktailsGlassTypeList){
    const categoryList = document.querySelector("#glassTypeList");
    let selectOptions = "";
    for(const category of cocktailsGlassTypeList.drinks){
      selectOptions += `<option>${category.strGlass}</option>`;
    }
    categoryList.innerHTML += selectOptions;
  }

  async function filterByGlassTypeCocktails(){
    const selectContainer = document.querySelector("#glassTypeList").value;
    const cocktailList = await getCocktailsByGlassTypeAPI(selectContainer);
    const drinks = await getCocktailsAPI();
    if(selectContainer == "Pasirinkite stiklinės tipą"){
      fillHTML(drinks);
    }
    else{fillHTML(cocktailList);}
  }