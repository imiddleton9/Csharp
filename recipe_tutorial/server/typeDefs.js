export const typeDefs = `#graphql
    type Query{
        hello: String
        getRecipes: [Recipe]
    }

    type Ingredient{
        ingredientName: String
        ingredientMeasure: String
    }

    type Recipe{
        id: ID
        title: String
        ingredients: [Ingredient]
        instructions: [String]
    }
`;