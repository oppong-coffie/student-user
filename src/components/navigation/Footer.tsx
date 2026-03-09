import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className='bg-[#44494E]  pt-[9vh]'>
            <div className="px-[5vw] md:px-[6vw] flex justify-between">
                <div className="text-white pt-5">
                    <ul className='mx-auto flex items-center flex-wrap Footersocials'>
                        <h2 className="text-white mr-6">Connect with us:</h2>
                        <li className="p-1 mx-2 my-2">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} fill="white" />
                            </a>
                        </li>
                        <li className="p-1 mx-2 my-2">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF size={30} fill="white" />
                            </a>
                        </li>
                        <li className="p-1 mx-2 my-2">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <FaYoutube size={30} fill="white" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-white pt-9">
                    <p className="text-white">© 2026 All Rights Reserved. Student Technologies</p>
                </div>


                <div className="flex gap-12 text-white">


                    <div className='mx-auto text-sm space-y-3 mobileFooterResponsive min-h-[20vh]'>
                        <h2 className='mb-[3vh] text-[1.2rem] text-primary'>Why Student?</h2>
                        <Link to='/features' className="text-white flex items-center gap-2">How it works </Link>
                        <Link to='/features' className="text-white flex items-center gap-2">Features </Link>
                    </div>

                    <div className='mx-auto text-sm space-y-3 mobileFooterResponsive min-h-[20vh]'>
                        <h2 className='mb-[3vh] text-[1.2rem] text-primary'>Company</h2>
                        <Link to='/about' className="text-white flex items-center gap-2">About Us </Link>
                        <Link to={'/about'} className="text-white flex items-center gap-2">Team</Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer