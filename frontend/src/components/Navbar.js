import React, { useState  } from "react";
import '../App.css';
import { Transition } from "@headlessui/react";
import { FaCartPlus ,FaSearch , FaHome} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [suggestions, setsuggestions] = useState([]);
 
    const navigate = useNavigate();
    
  const searchSubmitHandler = (e) => {
   
    if (keyword.trim()) {
        navigate(`/products/${keyword}`);
    } else {
        navigate("/products");
    }
  };

    return (
        <div className='navbar'>
            <nav className="bg-gray-800 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex flex-row items-center h-full">
                            <div className="flex-shrink-0 -ml-10 md:block hidden ">
                               <h1 className="text-white text-2xl font-bold">ShopMart </h1> 
                            </div>
                          <Link to='/'>
                              <FaHome className="text-white text-2xl ml-3" />
                          </Link> 
                            <div className="hidden lg:block ml-72 h-full ">
                                <div className="ml-18 flex flex-row">
                                    <input type='text' className="w-80 mt-3 pl-2  h-9 rounded"
                                     onChange={(e) => setKeyword(e.target.value)}
                                     placeholder="Search items..." />
                                    <FaSearch className="text-black text-lg -ml-7 mt-5" />
                                    <button
                                            onClick={searchSubmitHandler}
                                            type="button"
                                            className="bg-white inline-flex items-center justify-center font-bold ml-4 h-9 mt-3 px-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            aria-controls="mobile-menu"
                                            aria-expanded="false" >Search</button>
                                </div>
                            </div>
                            <div className="ml-5 lg:block hidden">
                            <FaCartPlus className="text-white ml-80 text-2xl" />
                            </div>
                            <div className="absolute top-3 right-3  hidden md:block  ">
                           
                            <Link to='/login'>  <button
                                            type="button"
                                            className="bg-white inline-flex items-center justify-center font-bold mx-2 p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            aria-controls="mobile-menu"
                                            aria-expanded="false" >Login</button></Link>   
                                  <Link to='/login'>     <button
                                            type="button"
                                            className="bg-white inline-flex items-center justify-center font-bold mx-2 p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            aria-controls="mobile-menu"
                                            aria-expanded="false" >Signup</button></Link>   
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="#"
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Dashboard
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Team
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Projects
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Calendar
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Reports
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    )
};

export default Navbar;
