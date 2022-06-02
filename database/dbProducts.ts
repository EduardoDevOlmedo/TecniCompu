import { db } from "."
import { IComputadora } from "../intefaces"
import Product from "../models/Product"


export const getProductBySlug = async(slug: string): Promise<IComputadora|null> => {
    await db.connect()
    const product = await Product.findOne({slug}).lean()
    await db.disconnect()

    if(!product){
        return null
    }

    return JSON.parse(JSON.stringify(product))

}


export const getAllProductSlugs = async(): Promise<any[]> => {
    await db.connect()
    const slugs = await Product.find().select("slug -_id").lean()
    await db.disconnect()

    return slugs;
}