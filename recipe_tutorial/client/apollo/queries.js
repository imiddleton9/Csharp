import { gql } from "@apollo/client";

export const QUERY_RECIPES =gql `
    query Recipes{
        getRecipes{
            id
            title
            ingredients {
                ingredientName
                ingredientMeasure
            }
            instructions
        }
    }
`;