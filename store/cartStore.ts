import { Product } from '@/types/Product';
import create from 'zustand';

export interface CartItem {
    us_item_id: string;
    product_id: string;
    title: string;
    thumbnail: string;
    price: number; // derived from primary_offer.offer_price
    quantity: number;
    // Add other relevant properties as needed
}

export interface CartState {
    cartItems: CartItem[];
    total: number;
    addItem: (item: Product) => void;
    removeItem: (itemId: string) => void;
    clearCart: () => void;
    updateItemQuantity: (itemId: string, newQuantity: number) => void;
}

const useCartStore = create<CartState>((set) => ({
    cartItems: [],
    total: 0,
    addItem: (item: Product) => {
        //@ts-ignore
        set((state) => {
            const existingItem = state.cartItems.find(
                (i) => i.product_id === item.product_id
            );

            if (existingItem) {
                return {
                    cartItems: state.cartItems.map((i) =>
                        i.product_id === item.product_id
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    ),
                };
            } else {
                return {
                    cartItems: [...state.cartItems, { ...item, quantity: 1 }],
                };
            }
        });
    },

    removeItem: (itemId: string) => {
        set((state) => ({
            cartItems: state.cartItems
                .map((item) =>
                    item.product_id === itemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0),
        }));
    },

    updateItemQuantity: (itemId: string, newQuantity: number) => {
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.product_id === itemId
                    ? { ...item, quantity: newQuantity }
                    : item
            ),
        }));
    },
    clearCart: () => {
        set(() => ({
            cartItems: [],
        }));
    },
}));

export default useCartStore;
