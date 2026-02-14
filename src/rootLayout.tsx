import Footer from './components/navigation/Footer'
import MenuBar from './components/navigation/menuBar'
import { Outlet } from 'react-router'

const RootLayout = () => {

  return (
    <div>
        <MenuBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout