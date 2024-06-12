const NavComponent = () => {
  return (
    <nav className=" bg-base-100 py-3 lg:px-20 shadow-lg shadow-primary mb-6">
      <div className="flex justify-between">
        <div className="">
          <a className="btn btn-ghost text-xl">REACT-Dinary</a>
        </div>
        <div>
          <a className="btn btn-ghost text-xl">Images</a>
          <a className="btn btn-ghost text-xl">Products</a>
        </div>
        <div>
          <a className="btn text-white btn-primary hover:btn-ghost text-xl">
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}
export default NavComponent
