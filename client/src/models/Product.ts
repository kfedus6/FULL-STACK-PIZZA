export interface ProductResponse {
    status: boolean;
    products: Product[];
    count: number;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    img: string,
    price: number
    status: boolean;
}