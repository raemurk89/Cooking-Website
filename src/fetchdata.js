import axios from "axios";
import createRecipeList from "./createRecipeList";

async function fetchData( searchQuery ){
    try {

        const response2 = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
            params: {
                apiKey: '7c23891197e24583b78bdd4d0294354a',
                query: searchQuery,
                number: 5
            },
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log( response2.data );
        // const {results} = response2.data;
        createRecipeList( response2.data )


    } catch ( e ) {
        console.error( e );
    }

}


export default fetchData;

