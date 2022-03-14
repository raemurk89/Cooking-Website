function createRecipeList( recipes ){

    const listOfRecipes = document.getElementById('list-of-recipes-two');

    recipes.map(( recipe ) => {

        const listItem2 = document.createElement('li');
        listItem2.setAttribute('id', 'list-item');

        listItem2.textContent = recipe.title;

        listOfRecipes.appendChild(listItem2);

    })

}

export default createRecipeList;