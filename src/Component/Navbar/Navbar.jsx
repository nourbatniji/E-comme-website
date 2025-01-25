import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { AuthContext } from "../../Context/AuthContextProvider";

export default function Navbar() {
  let { token, setToken } = useContext(AuthContext)

  let navg = useNavigate()
  function logout() {
    localStorage.removeItem('token')
    setToken(null)
    navg("/signin")
  }
  return (
    <>
      <nav className="bg-white border-gray-200 w-[100%]">
        <div className="flex flex-wrap items-center justify-between w-[90%] mx-auto p-4">
          <div className="w-1/2 md:w-[15%]">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" >
              <img src={logo} alt="Fresh Cart Logo" />
            </Link>
          </div>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false"><span className="sr-only">Open main menu</span><svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" /> </svg></button>

          <div className="hidden md:w-[85%] w-full m-auto md:block md:me-auto" id="navbar-dropdown">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              {token ?
                <ul className="w-full md:w-8/12 mx-auto md:flex md:justify-start md:items-center font-medium flex flex-col p-4 md:p-0  mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                  <li>
                    <NavLink to="/" className={(x) => x.isActive ? "block py-2 px-3 text-green hover:text-green duration-300" : "block py-2 px-3 hover:text-green duration-300"}>Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart" className={(x) => x.isActive ? "block py-2 px-3 text-green hover:text-green duration-300" : "block py-2 px-3 hover:text-green duration-300"}>Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products" className={(x) => x.isActive ? "block py-2 px-3 text-green hover:text-green duration-300" : "block py-2 px-3 hover:text-green duration-300"}>Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/categories" className={(x) => x.isActive ? "block py-2 px-3 text-green hover:text-green duration-300" : "block py-2 px-3 hover:text-green duration-300"}>Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/brands" className={(x) => x.isActive ? "block py-2 px-3 text-green hover:text-green duration-300" : "block py-2 px-3 hover:text-green duration-300"}>Brands
                    </NavLink>
                  </li>
                </ul> : ""}

              <ul className="w-full xs:w-4/12 m-auto font-medium flex items-center justify-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                <ul className="flex w-1/2 md:w-10/12 items-center justify-end">
                  <li>
                    <NavLink to="https://www.instagram.com" target="_blank" className="block py-2 px-2 hover:text-green duration-300 font-medium">
                      <i class="fa-brands fa-instagram"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.facebook.com" target="_blank" className="block py-2 px-2 hover:text-green duration-300 font-medium">
                      <i class="fa-brands fa-facebook"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.tiktok.com" target="_blank" className="block py-2 px-2 hover:text-green duration-300 font-medium">
                      <i class="fa-brands fa-tiktok"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.twitter.com" target="_blank" className="block py-2 px-2 hover:text-green duration-300 font-medium">
                      <i class="fa-brands fa-twitter"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.linkedin.com" target="_blank" className="block py-2 px-2 hover:text-green duration-300 font-medium" >
                      <i class="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.youtube.com" target="_blank" className="block py-2 px-2 hover:text-green duration-300 font-medium">
                      <i class="fa-brands fa-youtube"></i>
                    </NavLink>
                  </li>
                </ul>
                <ul className="flex flex-row w-1/2 md:w-2/12 justify-center items-center md:justify-start">
                  {token ? <li onClick={logout}>
                    <NavLink to="/signin" className={(x) => x.isActive ? "block py-2 px-3 text-green hover:text-green duration-300 font-medium" : "block py-2 px-3 hover:text-green duration-300 font-medium"}>Logout</NavLink>
                  </li> : <>
                    <li>
                      <NavLink to="/signin" className={(x) => x.isActive ? "block py-2 px-3 text-green hover:text-green duration-300 font-medium" : "block py-2 px-3 hover:text-green duration-300 font-medium"}>Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/signup" className={(x) => x.isActive ? "block py-2 px-3 text-green hover:text-green duration-300 font-medium" : "block py-2 px-3 hover:text-green duration-300 font-medium"}>Register</NavLink>
                    </li>
                  </>}
                </ul>
              </ul>
            </div>
          </div >
        </div >
      </nav >
    </>
  );
}





































