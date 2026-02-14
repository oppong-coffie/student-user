import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className='bg-[#44494E] relative px-[2vw] pt-[9vh]'>
        {/* <button className="bg-primary rounded-full p-4 fixed right-10 bottom-[4rem] shadow-xl shadow-primary/50"><MessageCircleMore color="white" strokeWidth={2} size={40}/></button> */}
        <div className="flex flex-wrap text-white w-full items-center justify-center gap-10 pb-[7vh]">

            <ul className='mx-auto text-sm space-y-3 mobileFooterResponsive min-h-[20vh]'>
                <h2 className='mb-[3vh] text-[1.2rem] text-primary'>Why Student?</h2>
                <li><Link to='/features' className="text-white flex items-center gap-2">Features </Link> </li>
                <li><Link to={'/'} className="text-white flex items-center gap-2">FAQs </Link></li>
            </ul>


            <ul className='mx-auto text-sm space-y-3 mobileFooterResponsive min-h-[20vh]'>
                <h2 className='mb-[3vh] text-[1.2rem] text-primary'>Site</h2>
                <li><Link to='/' className="text-white flex items-center gap-2">Home </Link> </li>
                <li><Link to={'/about'} className="text-white flex items-center gap-2">About Us </Link></li>
            </ul>
    
            <ul className='mx-auto text-sm space-y-3 mobileFooterResponsive min-h-[20vh]'>
                <h2 className='mb-[3vh] text-[1.2rem] text-primary'>Company</h2>
                <li><Link to='/about' className="text-white flex items-center gap-2">About Us </Link> </li>
                <li><Link to={'/about'} className="text-white flex items-center gap-2">Board of Directores</Link></li>
                <li><Link to={'/about'} className="text-white flex items-center gap-2">Team</Link></li>
            </ul>

            <ul className='mx-auto text-sm space-y-3 mobileFooterResponsive min-h-[20vh]'>
                <h2 className='mb-[3vh] text-[1.2rem] text-primary'>Contact</h2>
                <li><Link to='/' className="text-white flex items-center gap-2">Contact us </Link> </li>
            </ul>
        </div>
        <div className="text-center px-3 py-6 text-white">
            <p className="text-white">© 2025 All Rights Reserved, Student Ltd.</p>
        </div>
        <div className="flex justify-center items-center px-3 py-6 pb-[9vh] text-white">
            <ul className='mx-auto flex items-center flex-wrap Footersocials'>
                <h2 className="text-white mr-6">Connect with us:</h2>
                <li className="p-1 mx-2 my-2">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} fill="white"/>
                    </a>
                </li>
                <li className="p-1 mx-2 my-2">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF size={30} fill="white"/>
                    </a>
                </li>
                <li className="p-1 mx-2 my-2">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={30} fill="white"/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer