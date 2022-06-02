import { ISpecifications } from "../database/seed-data/Products";

export interface IComputadora {
    title: string;
    slug: string;
    description: string;
    price: number;
    specifications: ISpecifications;
    images: string;
    type: "Gamer" | "Student" | "Worked"
}
