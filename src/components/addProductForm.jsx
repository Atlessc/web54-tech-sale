import { useState } from 'react'
import { addProduct } from './addProduct'

function AddProductForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [availability, setAvailability] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    await addProduct(name, description, parseFloat(price), availability)
    setName('')
    setDescription('')
    setPrice('')
    setAvailability('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" value={price} onChange={event => setPrice(event.target.value)} />
      </label>
      <br />
      <label>
        Availability:
        <input type="text" value={availability} onChange={event => setAvailability(event.target.value)} />
      </label>
      <br />
      <input type="submit" value="Add Product" />
    </form>
  )
}

export default AddProductForm
