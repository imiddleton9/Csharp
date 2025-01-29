import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema({
    ingredientName: {
        type: String,
        required: true
    },
    ingredientMeasure: {
        type: String,
        required: true,
    },
});

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: [IngredientSchema],
        required: true,
    },
    instructions: {
        type: [String],
        required: true,
    },
});

export const Recipe = mongoose.model("recipes", RecipeSchema);