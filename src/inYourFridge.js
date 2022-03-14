import axios from "axios";

const input = document.getElementById('user-input-field-two');
const formTwo = document.getElementById('on-submit-two');



formTwo.addEventListener('submit', ( e ) => {

    e.preventDefault();

    fetchData2( input.value ).then();

})

async function fetchData2( searchQuery ){
    try {

        const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
            params: {
                apiKey: '8df2810123984ed5b72c7e98490fc529',
                ingredients: searchQuery,
                number: 3
            },
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log( response.data );
        createRecipeList2( response.data );
        // createImageList2( response.data );


    } catch ( e ) {
        console.error( e );
    }

}


function createRecipeList2( recipes ){

    const listOfRecipes2 = document.getElementById('list-of-recipes');
    const imageElement = document.getElementById('image-food');


    recipes.map(( recipe ) => {

        const listItem = document.createElement('p');
        listItem.setAttribute('id', 'text');
        imageElement.setAttribute('src', recipe.image);

        listItem.textContent = recipe.title;


        listOfRecipes2.appendChild(listItem);




    })


}



// function createImageList2( recipes ) {
//
//
//     const imageFood = document.getElementById('image-food')
//
//
//     recipes.map((recipeImage) => {
//
//         const listImage = document.createElement('p');
//         listImage.setAttribute('id', 'image');
//
//         listImage.src = recipeImage.image;
//
//
//         imageFood.appendChild(listImage);
//
//
//     })
// }