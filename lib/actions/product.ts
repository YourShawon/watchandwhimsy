"use server"

import { client } from "../db"

export const onGetSingleProductInfo = async (productId:string) => {
  try {
    const product = await client.product.findUnique({
      where: {
        id: productId,
      }
    })
  } catch (error) {
    return {
      status: 400,
      message: "something went wrong",
    }
  }
}