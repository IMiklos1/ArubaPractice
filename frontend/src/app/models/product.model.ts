import { Type } from "./type.model";

export interface Product {
    id?: number;
    name: string;
    picture_url: string;
    price_huf: number;
    short_description: string;
    types?: Type[];
}
