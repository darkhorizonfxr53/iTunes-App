import React from 'react';
// Import components from react-bootstrap
import { Button } from 'react-bootstrap';
// Import items from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash as faSolidTrash } from '@fortawesome/free-solid-svg-icons';

// Import css
import './favItem.css';

const FavItem = ({ item, fetchFavourites }) => {
   // Function that preforms an API request to remove the item from 'favourites'
   const removeItem = async () => {
      await fetch(`/api/delete/${item.id}`, {
         method: 'DELETE'
      });
      fetchFavourites();// Run 'fetchFavourites' to display the updated list
   }

   // Function that handles removing an item from 'favourites'
   const handleRemove = (e) => {
      e.preventDefault();// Prevent default actions
      removeItem();// Run 'removeItem' to remove the item from 'favourites'
   }

   // Function to determine which URL to use when 'View more' is clicked
   // If the item has a 'trackViewUrl' then use 'trackViewUrl', else use 'collectionViewUrl'
   const viewMoreUrl = item.favItem.trackViewUrl ? item.favItem.trackViewUrl : item.favItem.collectionViewUrl;

   // Function that handles what happens then the 'View more' button is clicked
   const handleViewMore = () => {
      // This creates a new tab and takes you to a page which allows you to view more info about the item
      window.open(viewMoreUrl);
   }

   return (
      <div className='fav-item'>
         {/* Section that should display the item's artwork */}
         <div className='img'>
            {/* If the item has artwork then display the artwork, else display the text */}
            {item.favItem.artworkUrl100 ? (
               <img src={item.favItem.artworkUrl100} alt='media artwork' />
            ) : (
               <div className='img-text'>
                  No image
               </div>
            )}
         </div>
         {/* Section that will display the item's info */}
         <div className='item-info'>
            {/* If there is no 'trackName' then use 'collectionName', else use 'trackName' */}
            {!item.favItem.trackName ? (
               <div className='collection-name'>
                  <span>Name:</span> {item.favItem.collectionName}
               </div>
            ) : (
               <div className='track-name'>
                  <span>Name:</span> {item.favItem.trackName}
               </div>
            )}
            <div className='artist-name'>
               <span>Artist:</span> {item.favItem.artistName}
            </div>
            {/* If the item has 'kind' then display 'kind', else display 'wrapperType' */}
            {item.favItem.kind ? (
               <div className='kind'>
                  <span>Type:</span> {item.favItem.kind}
               </div>
            ) : (
               <div className='wrapper-type'>
                  <span>Type:</span> {item.favItem.wrapperType}
               </div>
            )}
         </div>
         {/* Section that contains the buttons */}
         <div className='btns'>
            <div className='remove-btn'>
               {/* Button that removes the item from 'favourites' when clicked */}
               <button onClick={handleRemove}>
                  <FontAwesomeIcon icon={faSolidTrash} />
               </button>
            </div>
            <div className='view-more-btn'>
               {/* Button that takes you to a page that shows more info about the item */}
               <Button variant='success' onClick={handleViewMore}>
                  View more
               </Button>
            </div>
         </div>
      </div>
   )
}

export default FavItem