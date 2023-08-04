import { useState } from 'react'
import '../styles/styles.css'

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
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <div className='input-section'>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      </div>
      <br />
      <div className='input-section'>
      <label>
        Description:
        <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
      </label>
      </div>
      <br />
      <div className='input-section'>
      <label>
        Price:
        <input type="text" value={price} onChange={event => setPrice(event.target.value)} />
      </label>
      </div>
      <br />
      <div className='input-section'>
      <label>
        Availability:
        <input type="text" value={availability} onChange={event => setAvailability(event.target.value)} />
      </label>
      </div>
      <br />
      <div className='submit-button'>
      <input type="submit" value="Submit" />
      </div>
    </form>
    </div>
  )
}

export default AddProductForm
