import { useState } from 'react'
import '../styles/styles.css'

function AddProductForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [availability, setAvailability] = useState('')
  const [showAddProductForm, setShowAddProductForm] = useState(false)

  const handleSubmit = async (event) => {
    // event.preventDefault()

    // const response = await fetch('/api/addProduct', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name,
    //     description,
    //     price: parseFloat(price),
    //     availability,
    //   })
    // })

    // const product = await response.json()

    // // handle the response from the serverless function

    // setName('')
    // setDescription('')
    // setPrice('')
    // setAvailability('')
    setShowAddProductForm(!showAddProductForm);

  }

  const ToggleViewAddProductForm = () => {
    setShowAddProductForm(!showAddProductForm);
  }

  return (
    <div className='form-container'>

    <form>
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
      <div className='button-cont'>
      {/* <input type="submit" value="Submit" /> */}
      <input type="submit" value="Submit" className='submit-button' onClick={handleSubmit}/>
      </div>
    </form>
    </div>
  )
}

export default AddProductForm
