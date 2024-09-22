import { PROMT_FORMAT } from "../constants/constants";
import { chat_session } from "./gemini";

export const generateListOfIngredients = async (recipe?: string) => {
    try {
        const ingredientsList = await chat_session.sendMessage(PROMT_FORMAT(recipe))
        const formattedJson = ingredientsList.response
            .text()
        return JSON.parse(formattedJson);
    } catch (error) {
        console.error(error);
    }

}