import { NavLink } from 'react-router-dom'

const NavComponent = () => {
  return (
    <nav className=" bg-base-100 py-3 lg:px-20 shadow-lg shadow-primary mb-6">
      <div className="flex justify-between">
        <div className="">
          <NavLink to="/" className="btn btn-ghost text-xl">
            REACT-Dinary
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/"
            className="btn btn-ghost text-xl [&.active]:text-white"
          >
            Images
          </NavLink>
          <NavLink
            to="/product"
            className="btn btn-ghost text-xl [&.active]:text-white"
          >
            Products
          </NavLink>
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
