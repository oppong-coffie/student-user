
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './rootLayout'
import Home from './pages/home/home'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutStudent from './pages/about-us/AboutUs'
import BenefitsOfStudents from './pages/Benefits/BenefitsOfStudents'
import HowItWorks from './pages/How-it-works/HowItWorks'
import Features from './pages/features/Features'


function App() {  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);


    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false
      });
    }, []);
    
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children:[
        {element:<Home/>, index:true},
        {element:<AboutStudent/>, path:"/about"},
        {element:<BenefitsOfStudents/>, path:"/benefits"},
        {element:<HowItWorks/>, path:"/how-it-works"},
        {element:<Features/>, path:"/features"},
      ]
    },
  ])

  return (
   <RouterProvider router={router} />
  )
}

export default App
