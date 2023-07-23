import React, { useState } from 'react'
// Import react-bootstrap components
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// Import components
import Help from '../help-sidebar/Help'

// Import CSS
import './header.css'

const Header = () => {
   // UseState to save whether the help sidebar is open or closed
   const [showHelpSidebar, setShowHelpSidebar] = useState(false);

   // Close sidebar
   const handleHelpClose = () => setShowHelpSidebar(false);// Set state
   // Open sidebar
   const handleHelpShow = () => setShowHelpSidebar(true);// Set state

   return (
      <div>
         <div className='header-container'>
            <div className='help-btn'>
               {/* 'Help' button to show the help sidebar */}
               <Button variant='success' onClick={handleHelpShow}>Help</Button>
            </div>
            <div className='header'>
               {/* Heading */}
               iTunes & Apple Books Search
            </div>
            <div className='favourite-btn'>
               {/* 'Favourites' button to take you to the page that displays your list of favourite */}
               <Link to='/favourites'>
                  <Button className='btn btn-success'>Favourites</Button>
               </Link>
            </div>
         </div>
         {/* 'Help' component that contains the help sidebar */}
         <Help
            showHelpSidebar={showHelpSidebar}
            handleHelpClose={handleHelpClose}
         />
      </div>
   )
}

export default Header
