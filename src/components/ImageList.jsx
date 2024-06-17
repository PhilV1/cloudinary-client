import { useEffect, useState } from 'react'

function ImageList() {
  const backendUrl = import.meta.env.VITE_BASE_URL
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [data])

  const fetchData = () => {
    fetch(`${backendUrl}/products`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }

  const deleteData = (id) => {
    fetch(`${backendUrl}/products/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }

  return (
    <>
      <h1 className="mb-12 text-center text-3xl font-bold uppercase text-primary">
        ALL IMAGES
      </h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {(!Array.isArray(data) || data.length === 0) && (
          <h2 className="font-bold text-xl">No Images added yet</h2>
        )}

        {Array.isArray(data) &&
          data.map((item) => (
            <div key={item._id} className="card w-96 bg-base-100 shadow-xl ">
              <figure>
                <img src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => deleteData(item._id)}
                    className="btn btn-primary hover:btn-ghost text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
export default ImageList
