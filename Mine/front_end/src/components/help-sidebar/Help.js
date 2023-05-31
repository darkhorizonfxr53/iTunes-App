import React from 'react'
// Import react-bootstrap components
import { Offcanvas } from 'react-bootstrap';
// Import items from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faTrash as faSolidTrash } from '@fortawesome/free-solid-svg-icons';

// Import CSS
import './help.css'

const Help = ({showHelpSidebar, handleHelpClose}) => {
   return (
      <Offcanvas 
         show={showHelpSidebar} 
         onHide={handleHelpClose}
         placement='start'
      >
         {/* Header contains a button to close the sidebar */}
         <Offcanvas.Header closeButton>
            {/* Title of the sidebar */}
            <Offcanvas.Title>Need some help?</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
            <div className='help-search'>
               <div className='title'>To search:</div>
               <ol>
                  <li>
                     Enter a search term within the search box
                  </li>
                  <li>
                     Select the type of media you would like to search for, i.e. movie, podcast, music, music video, audio book, short film, TV show, software, ebook or all from the drop-down menu
                  </li>
                  <li>
                     Press 'Search'
                  </li>
               </ol>
            </div>
            <div className='help-add-fav'>
               <div className='title'>To add to favourites:</div>
               <ol>
                  <li>
                     Find the item you would like to add to favourites
                  </li>
                  <li>
                     Click the <FontAwesomeIcon icon={faSolidHeart} /> icon next to that item to add it
                  </li>
               </ol>
            </div>
            <div className='help-view-more-info'>
               <div className='title'>To view more info on an item:</div>
               <ol>
                  <li>Find the item you want to view more about</li>
                  <li>Click the 'View more' button next to the item</li>
               </ol>
            </div>
            <div className='help-view-fav'>
               <div className='title'>To view favourites:</div>
               <ol>
                  <li>
                     Click the 'Favourites' button which will take you to your list of favourites
                  </li>
               </ol>
            </div>
            <div className='help-remove-fav'>
               <div className='title'>To remove an item within favourites:</div>
               <ol>
                  <li> Click the <FontAwesomeIcon icon={faSolidTrash} /> icon next to the item you would like to remove</li >
               </ol>
            </div>
            <div className='help-remove-fav-home'>
               <div className='title'>To remove an item from favourites from home page:</div>
               <ol>
                  <li>Find the item with a <FontAwesomeIcon icon={faSolidHeart} /> icon next to it that you would like to remove from favourites</li>
                  <li>Click the heart icon to unselect it and it will be removed</li>
               </ol>
            </div>
         </Offcanvas.Body>
      </Offcanvas>
   )
}

export default Help
