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
  return (
    <div className="flex gap-4">
      {data.map((item) => (
        <div key={item.id} className="card w-96 bg-base-100 shadow-xl ">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  )
}
export default ImageList
