import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function addProduct(name, description, price, availability) {
  const product = await prisma.product.create({
    data: {
      name,
      description,
      price,
      availability
    }
  })
  return product
}


export default addProduct;