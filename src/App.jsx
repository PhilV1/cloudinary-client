import NavComponent from './components/NavComponent'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <NavComponent />
        <div className=" mx-auto p-5 lg:w-2/3 lg:p-2">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
