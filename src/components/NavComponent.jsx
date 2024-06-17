import { NavLink, Outlet } from 'react-router-dom'

const NavComponent = () => {
  return (
    <>
      <nav className=" bg-base-100 py-3 lg:px-20 shadow-lg shadow-primary mb-6 px-4">
        <div className="flex justify-between">
          <div className="">
            <NavLink
              to="/"
              className="btn btn-ghost text-xl [&.active]:text-primary"
            >
              REACT-Dinary
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/images"
              className="btn btn-ghost text-xl [&.active]:text-primary"
            >
              Images
            </NavLink>
            <NavLink
              to="/product"
              className="btn btn-ghost text-xl [&.active]:text-primary"
            >
              Products
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/login"
              className="btn text-white btn-primary hover:btn-ghost text-xl"
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
      <div className=" mx-auto p-5 lg:w-2/3 lg:p-2">
        <Outlet />
      </div>
    </>
  )
}
export default NavComponent
