
export type Product = {
    product_id: string;
    rating?: number;
    reviews?: number;
    us_item_id?: string;
    title: string;
    price: number; // derived from primary_offer.offer_price
    thumbnail: string;
};