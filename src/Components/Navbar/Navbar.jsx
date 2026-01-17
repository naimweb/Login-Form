import React from 'react'
import './nav.css'
import { Link,Outlet } from 'react-router-dom'

function Navbar() {
  return (
     <>
         <div className='main-nav'>
             <div className='tag'>
              <img src="/react.svg" alt="" />

             </div>

                <nav className='nav-desk'>
                    <ul>
                        <li><Link to ="/Home">Home</Link></li>
                        <li><Link to ="/About">About</Link></li>
                        <li><Link to ="/contact">Contact</Link></li>
                        <li><Link to ="/sign-up">Sign</Link></li>
                    
                        
                      
                    </ul>
                </nav>
                <Outlet />

         </div>
      
     </>
  )
}

export default Navbar