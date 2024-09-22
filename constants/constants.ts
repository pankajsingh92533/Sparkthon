

export const PROMT_FORMAT = (recipe?: string) => `You are an AI model and your task is to return a json of the list of ingredients required to make ${recipe} . Remember that the ingredients details should be compact i.e. return only the name of the ingridient not the quantity it is needed and easily recognizable by the Walmart API so you to only return the list of ingredients nothing else in response`




export const defaultCart = {
    "us_item_id": "108758367",
    "product_id": "115QQDOTZFEG",
    "title": "Maxwell House Breakfast Blend Ground Coffee, 25.6 oz Canister",
    "thumbnail": "https://i5.walmartimages.com/seo/Maxwell-House-Light-Roast-Breakfast-Blend-Ground-Coffee-25-6-oz-Canister_28c2c711-c044-401e-b6d1-c37d0cc2571a.761e21e8be381e0870ced126f47706e8.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    "rating": 4.5,
    "reviews": 417,
    "seller_id": "F55CDC31AB754BB68FE0B39041159D63",
    "seller_name": "Walmart.com",
    "two_day_shipping": false,
    "free_shipping": false,
    "free_shipping_with_walmart_plus": true,
    "out_of_stock": false,
    "sponsored": true,
    "muliple_options_available": true,
    "primary_offer": {
        "offer_id": "F4F2C47B175346EEAB6DA491807E572F",
        "offer_price": 8.98,
        "min_price": 7.72
    },
    "price_per_unit": {
        "unit": "each",
        "amount": "35.1 ¢/oz"
    },
    "product_page_url": "https://www.walmart.com/ip/Maxwell-House-Light-Roast-Breakfast-Blend-Ground-Coffee-25-6-oz-Canister/108758367?athbdg=L1600",
    "serpapi_product_page_url": "https://serpapi.com/search.json?device=desktop&engine=walmart_product&product_id=108758367"
}


export const mockRes = [
    [{
        "product_id": "2H34HFH5GM0I",
        "rating": 4.4,
        "reviews": 756,
        "us_item_id": "10319374",
        "title": "Pillsbury Refrigerated Classic Pizza Crust, 13.8 oz.",
        "price": 3.64,
        "thumbnail": "https://i5.walmartimages.com/seo/Pillsbury-Refrigerated-Classic-Pizza-Crust-13.8-oz_9fc71a8e-1c87-4626-8a69-028390366d2f.107e11b3db7963768c037815ecfca839.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
    }],
    [{
        "product_id": "42OE96ZMYDIP",
        "rating": 3.4,
        "reviews": 7,
        "us_item_id": "1630864898",
        "title": "Carbone Fine Foods Spicy Vodka Sauce, 24 oz",
        "price": 7.97,
        "thumbnail": "https://i5.walmartimages.com/seo/Carbone-Fine-Foods-Spicy-Vodka-Sauce-24-oz_9b4820ec-765d-42c5-a254-5822a7f69d09.01299e359c6261bc25f0f861bd6d04fa.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
    }],
    [{
        "product_id": "2HUCJ2L69MIX",
        "rating": 3.4,
        "reviews": 17,
        "us_item_id": "103135606",
        "title": "Galbani Whole Milk Low Moisture Mozzarella Cheese Block, 16 oz (Refrigerated)",
        "price": 4.68,
        "thumbnail": "https://i5.walmartimages.com/seo/Galbani-Whole-Milk-Low-Moisture-Mozzarella-Cheese-Block-16-oz-Refrigerated_d79d951b-5bf6-4726-b338-3f5bd1b7941c.885181771b4ccefcbf501c06e2022427.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
    }],
    [{
        "product_id": "6BSX9Z39WMIQ",
        "rating": 4.2,
        "reviews": 366,
        "us_item_id": "42794630",
        "title": "Screamin' Sicilian Original Pizzeria Crust Holy Pepperoni Frozen Pizza, 22.3 oz",
        "price": 6.97,
        "thumbnail": "https://i5.walmartimages.com/seo/Screamin-Sicilian-Original-Pizzeria-Crust-Holy-Pepperoni-Frozen-Pizza-22.3-oz_6dbcc332-180b-4f12-8a38-15fdbb8c1b1b.c4ef4e426ea54f0ec95146bcfb24535f.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
    }]]