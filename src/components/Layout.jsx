import { Outlet } from 'react-router-dom'
import Home from './Home'
function Layout() {
  return (
    <div>
    <Home/>
    {/* <Outlet/> */}
    </div>
  )
}

export default Layout