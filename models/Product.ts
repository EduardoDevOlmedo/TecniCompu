import { IComputadora } from "../intefaces";
import mongoose, {Model, Schema} from "mongoose";


export interface IProduct extends IComputadora {}

const ProductSchema = new Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    specifications: {type: Object, required: true},
    images: {type: String, required: true},
    type: {
        type: String,
        enum: {
            values: ['Gamer', 'Student', 'Worked' ],
            message: '{VALUE} no es un estado permitido'
        },
        default: "Gamer"
    }
})

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model('Product', ProductSchema );
export default Product;