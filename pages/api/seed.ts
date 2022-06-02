// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database'
import { Products } from '../../database/seed-data'
import Product from '../../models/Product'
import ProductModel from '../../models/Product'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>) {

    if(process.env.NODE_ENV === "production"){
      return res.status(401).json({
          message: "No tiene acceso a este servicio"
      })
  }

   await db.connect()
  

   await Product.deleteMany()
   await Product.insertMany(Products.computadoras)

   await db.disconnect()

   res.status(200).json({ message: 'Proceso realizado correctamente'})

}


