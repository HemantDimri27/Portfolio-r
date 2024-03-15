import React from 'react'
import {Link, NavLink} from 'react-router-dom'

/*
  Link - use instead of <a> tag, coz <a> tag reloads page and react not
  NavLink - it provides some aditional 

  - href=""  replaced by  to=""

  - isActive, used to track user page with NavLink
*/

export default function Header() {
  return (
      <header className="shadow sticky z-50 top-0">
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <Link to="/" className="flex items-center">
                      <p className=' font-bold text-3xl text-orange-700'>Hemant Dimri</p>
                  </Link>
                  <div className="flex items-center lg:order-2">
                      <a
                           href="https://www.linkedin.com/in/hemantdimri/"
                           
                           target="_blank"
                           rel="noreferrer"
                          className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Linkedin
                      </a>
                      <a

                          href="https://github.com/HemantDimri27"
                        
                           target="_blank"
                           rel="noreferrer"
                         className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          GitHub
                      </a>
                  </div>
                  <div
                      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                  >
                      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          <li>
                              <NavLink
                                to="/"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Home
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                to="/about"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  About
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                to="/projects"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }             
                              >
                                  Projects
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                to="/contact"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Contact
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                to="/github"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Github
                              </NavLink>
                          </li>
                          
                          
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  );
}

