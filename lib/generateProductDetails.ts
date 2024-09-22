import { AxiosResponse } from "axios"
import { getUrl } from "./walmart"
import { Product } from "@/types/Product"


export const generateProductDetails = async (ingredients: any[]) => {
    const promises: Promise<AxiosResponse>[] = []
    for (let i = 0; i < ingredients.length; i++) {

        console.log("The ingredient is ", ingredients[i])
        const promise = getUrl(ingredients[i])
        promises.push(promise)

    }
    const products: any[][] = [];

    const resolvedPromises = await Promise.all(promises);
    resolvedPromises.forEach((data: any) => {
        const parsedJson = data;
        products.push(parsedJson.organic_results); // Push the entire organic_results array
    });

    const filteredData: Product[][] = products.map((organicResults) => {
        // Slice the top 5 results
        const topFiveResults = organicResults.slice(0, 5);

        // Map each result to a Product object
        return topFiveResults.map((item) => ({
            product_id: item.product_id,
            rating: item.rating,
            reviews: item.reviews,
            us_item_id: item.us_item_id,
            title: item.title,
            price: item.primary_offer.offer_price, // Assuming price is derived from offer_price
            thumbnail: item.thumbnail,
        }));
    });

    return filteredData;
}
