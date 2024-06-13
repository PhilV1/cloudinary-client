import { useState, useEffect } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const CreateProduct = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({})
  const backendUrl = import.meta.env.VITE_BASE_URL
  const [message, setMessage] = useState(null)
  const [isVisible, setIsVisible] = useState(true)
  const [imageUrl, setImageUrl] = useState('')
  const [uploading, setUploading] = useState(false)

  console.log(backendUrl)

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

  const handleChange = (e) => {
    const { id, value, files } = e.target

    if (id === 'image') {
      handleImageChange(files[0], e)
    } else {
      handleTextChange(e)
    }
  }

  // Handle image changes
  const handleImageChange = (imageFile, e) => {
    if (
      // Überprüfen Sie die Dateigröße und den Dateityp
      imageFile &&
      (imageFile.type === 'image/png' ||
        imageFile.type === 'image/jpeg' ||
        imageFile.type === 'image/jpg' ||
        imageFile.type === 'image/gif') &&
      imageFile.size <= 5000000
    ) {
      const readFile = new FileReader()
      readFile.readAsDataURL(imageFile)
      readFile.onloadend = () => {
        // Bild-URL setzen
        setImageUrl(readFile.result)

        // Fehlermeldung zurücksetzen
        setErrors((prevErrors) => ({ ...prevErrors, image: null }))
      }
    } else {
      e.target.value = null
      setImageUrl('')
      // Fehlermeldung anzeigen
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: 'Invalid file type or size',
      }))
    }
  }

  // Handle text changes
  const handleTextChange = (e) => {
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
    if (!imageUrl) newErrors.image = 'Image is required'
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

    setUploading(true)
    const productData = {
      name,
      description,
      image: imageUrl, // Bild-URL hinzufügen
    }

    const responseData = await handlePostData(backendUrl, productData)
    console.log('Form data: ', productData) // log the form data
    // Set the message
    setMessage('Produkt erfolgreich hinzugefügt!')
    setUploading(false)
    // Clear the form
    setName('')
    setDescription('')
    setImageUrl('')
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="mb-12 text-center text-3xl font-bold uppercase text-primary">
          Add a Product
        </h1>
        {message && isVisible && (
          <p className="mt-3 text-xs font-bold text-green-500">{message}</p>
        )}
      </div>

      <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-x-8">
        <div className="">
          <div className="">
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

        <div className="">
          {uploading ? (
            <ClipLoader
              color={'blue'}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
              className="mt-4"
            />
          ) : (
            <div className="form-control w-full ">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Uploaded Preview"
                  className="mt-3 h-fit max-w-xs"
                />
              )}
              <label className="label" htmlFor="image">
                {imageUrl ? (
                  ''
                ) : (
                  <span className="label-text">Upload an Image:</span>
                )}
              </label>
              <input
                type="file"
                id="image"
                className="file-input w-full max-w-xs"
                onChange={handleChange}
                accept="image/png, image/jpg, image/jpeg, image/jfif"
              />
            </div>
          )}
          {errors.image && (
            <p className="text-sm text-red-500">{errors.image}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateProduct
