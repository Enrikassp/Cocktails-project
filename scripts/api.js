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

async function getCocktailsBySearchAPI(drinkName){
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`);
    const resp = await promise.json();
    return resp;
}

async function getCategoryAPI(){
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
    const resp = await promise.json();
    return resp;
}

async function getGlassTypeAPI(){
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`);
    const resp = await promise.json();
    return resp;
}

async function getIngridientAPI(){
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);
    const resp = await promise.json();
    return resp;
}

async function getCocktailsByCategoryAPI(categoryName){
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    const resp = await promise.json();
    return resp;
}

async function getCocktailsByGlassTypeAPI(glassTypeName){
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassTypeName}`);
    const resp = await promise.json();
    return resp;
}

async function getCocktailsByIngridientAPI(ingridientName){
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingridientName}`);
    const resp = await promise.json();
    return resp;
}

async function getRandomCocktailAPI(){
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
    const resp = await promise.json();
    return resp;
}


