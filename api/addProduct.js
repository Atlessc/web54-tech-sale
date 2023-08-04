import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function addProduct(req, res) {
  const { name, description, price, availability } = req.body

  const product = await prisma.product.create({
    data: {
      name,
      description,
      price,
      availability
    }
  })

  res.status(200).json(product)
}
