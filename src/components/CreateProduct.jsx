import { useState } from 'react'

const CreateProduct = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({})

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target
    if (id === 'name') {
      setName(value)
    } else if (id === 'description') {
      setDescription(value)
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

    // Clear the form
    setName('')
    setDescription('')
  }

  return (
    <>
      <h1 className="mb-12 text-center text-3xl font-bold uppercase text-primary">
        Add a Product
      </h1>
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
