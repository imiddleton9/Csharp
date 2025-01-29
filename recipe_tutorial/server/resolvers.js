import { Recipe } from "./models/Recipe.js"

export const resolvers ={
    Query:{
        hello:() => "Hello World",
        getRecipes: async () => await Recipe.find(),
    },
};