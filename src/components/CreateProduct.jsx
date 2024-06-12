import { useState, useEffect } from 'react'

const CreateProduct = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({})
  const backendUrl = 'http://localhost:3002'
  const [message, setMessage] = useState(null)
  const [isVisible, setIsVisible] = useState(true)

  // Message nach 5 Sekunden verstecken
  useEffect(() => {
    let timer
    if (message && isVisible) {
      timer = setTimeout(() => {
        setIsVisible(false)
      }, 5000) // Nachricht nach 5 Sekunden verstecken
    }
    return () => clearTimeout(timer) // Aufräumen, wenn die Komponente unmountet
  }, [message, isVisible])

  const handlePostData = async (url, data) => {
    try {
      const response = await fetch(`${url}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const responseData = await response.json()
      return responseData
    } catch (error) {
      console.log(error)
    }
  }

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target
    if (id === 'name') {
      setName(value)
      setErrors({ ...errors, name: '' })
    } else if (id === 'description') {
      setDescription(value)
      setErrors({ ...errors, description: '' })
    }
  }
  //Form validation
  const validateForm = () => {
    const newErrors = {}
    if (!name) newErrors.name = 'Name is required'
    if (!description) newErrors.description = 'Description is required'
    return newErrors
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm(e)
    if (Object.keys(newErrors).length > 0) {
      console.log(newErrors)
      setErrors(newErrors)
      return
    }

    const productData = {
      name,
      description,
    }

    const responseData = await handlePostData(backendUrl, productData)
    console.log('Form data: ', productData) // log the form data
    // Set the message
    setMessage(responseData.message)

    // Clear the form
    setName('')
    setDescription('')
  }

  return (
    <>
      <div>
        <h1 className="mb-12 text-center text-3xl font-bold uppercase text-primary">
          Add a Product
        </h1>
        {message && isVisible && (
          <p className="mt-3 text-xs font-bold text-green-500">{message}</p>
        )}
      </div>

      <form onSubmit={handleFormSubmit} className="m-x-auto w-full">
        <div className="flex flex-col gap-8 sm:flex-row lg:gap-16">
          <div className="lg:w-1/2">
            <div className="form-control w-full">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                className="input input-bordered w-full"
                placeholder="Enter name"
                value={name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label" htmlFor="description">
                <span className="label-text">Description</span>
              </label>
              <textarea
                id="description"
                className="textarea textarea-bordered w-full resize-none"
                placeholder="Enter description"
                rows={3}
                value={description}
                onChange={handleChange}
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.description}
                </p>
              )}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  )
}

export default CreateProduct
