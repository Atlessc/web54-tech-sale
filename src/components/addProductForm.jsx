import { useState } from 'react'

function AddProductForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [availability, setAvailability] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('/api/addProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        price: parseFloat(price),
        availability,
      })
    })

    const product = await response.json()

    // handle the response from the serverless function

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
