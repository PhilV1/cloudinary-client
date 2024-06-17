function App() {
  return (
    <>
      <h1 className="mb-12 text-center text-3xl font-bold uppercase text-primary">
        WELCOME TO REACT-DINARY
      </h1>
      <h2 className="font-bold text-xl text-center">
        React-Dinary is a dynamic, user-friendly website designed for showcasing
        and managing product images with ease.
      </h2>
      <div className="mt-6 carousel w-full ">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full  py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </>
  )
}

export default App
