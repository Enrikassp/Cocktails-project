async function getCocktailsAPI(){
    const promise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass");
    const resp = await promise.json();
    return resp;
}

async function getCocktailsInfoAPI(drinkID){
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`);
    const resp = await promise.json();
    return resp;
}