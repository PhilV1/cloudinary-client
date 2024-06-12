import { useEffect, useState } from 'react'

function ImageList() {
  const backendUrl = 'http://localhost:3002'
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

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
        console.log(data)
        fetchData()
      })
  }

  return (
    <div className="flex gap-4">
      {data.map((item) => (
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
  )
}
export default ImageList
