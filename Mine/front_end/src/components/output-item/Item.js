// Import components from react
import React, { useEffect, useState } from 'react';
// Import components from react-bootstrap
import { Button } from 'react-bootstrap';
// Import items from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';

// Import css
import './item.css'

const Item = ({ item, fetchFavourites, favourites }) => {
   const [addFavClicked, setAddFavClicked] = useState(false);// UseState to save wether the item has been added to favourites or not

   // Function to determine the id of the item
   const id = 
      // If there is a 'trackId' then use 'trackId' as the id...
      item.trackId ? item.trackId : ( // ...else...
         // ...if there is an 'artistId' and a 'collectionId'...
         item.artistId && item.collectionId ? (// ...then...
            // ...add 'artistId' and 'collectionId' and use that as the id...
            Number(item.artistId) + Number(item.collectionId)
         ) : (// ...else...
            // ...if there is just an 'artistId' then use 'artistId' as the id, else use the 'collectionId' as the id
            item.artistId ? item.artistId : item.collectionId
         )
      );

   // Function that preforms an API request that adds the item to 'favourites'
   const addItem = async () => {
      await fetch('/api/add', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            id,
            favItem: item
         })
      });
      fetchFavourites();// Run 'fetchFavourites'
   }

   // Function that preforms an API request to remove the item from 'favourites'
   const removeItem = async () => {
      await fetch(`/api/delete/${id}`, {
         method: 'DELETE'
      });
      fetchFavourites();// Run 'fetchFavourites'
   }

   // Function that handles the adding of the item to 'favourites'
   const handleAdd = (e) => {
      e.preventDefault();// Prevent default actions
      setAddFavClicked(true);// Set the state to true to show a read heart to show that the item is in 'favourites'
      addItem();// Run 'addItem' to save the item to 'favourites'
   }

   // Function that handles removing an item from 'favourites'
   const handleRemove = (e) => {
      e.preventDefault();// Prevent default actions
      setAddFavClicked(false);// Set the state back false to show that the item is not in 'favourites'
      removeItem();// Run 'removeItem' to remove the item from 'favourites'
   }

   // Function to determine which URL to use when 'View more' is clicked
   // If the item has a 'trackViewUrl' then use 'trackViewUrl', else use 'collectionViewUrl'
   const viewMoreUrl = item.trackViewUrl ? item.trackViewUrl : item.collectionViewUrl;

   // Function that handles what happens then the 'View more' button is clicked
   const handleViewMore = () => {
      // This creates a new tab and takes you to a page which allows you to view more info about the item
      window.open(viewMoreUrl);
   }

   // UseEffect that checks if the item has already been added to 'favourites' or not
   useEffect(() => {
      // If 'favourites' exists and does not equal undefined...
      if (favourites && favourites !== undefined) {
         // ...then loop through favourites
         for (let i = 0; i < favourites.length; i++) {
            // If the id of the item in 'favourites' is equal to this item's id...
            if (favourites[i].id === id) {
               // ...then set the state to true to show that the item is in 'favourites'
               setAddFavClicked(true);
            }
         }
      }
   }, [favourites, id])
   
   return (
      <div className='output-item'>
         {/* Section that should display the item's artwork */}
         <div className='img'>
            {/* If the item has artwork then display the artwork, else display the text */}
            {item.artworkUrl100 ? (
               <img src={item.artworkUrl100} alt='media artwork' />
            ) : (
               <div className='img-text'>
                  No image
               </div>
            )}
         </div>
         {/* Section that will display the item's info */}
         <div className='item-info'>
            {/* If there is no 'trackName' then use 'collectionName', else use 'trackName' */}
            {!item.trackName ? (
               <div className='collection-name'>
                  <span>Name:</span> {item.collectionName}
               </div>
            ) : (
               <div className='track-name'>
                  <span>Name:</span> {item.trackName}
               </div>
            )}
            <div className='artist-name'>
               <span>Artist:</span> {item.artistName}
            </div>
            {/* If the item has 'kind' then display 'kind', else display 'wrapperType' */}
            {item.kind ? (
               <div className='kind'>
                  <span>Type:</span> {item.kind}
               </div>
            ) : (
               <div className='wrapper-type'>
                  <span>Type:</span> {item.wrapperType}
               </div>
            )}
         </div>
         {/* Section that contains the buttons */}
         <div className='btns'>
            <div className='heart-btn'>
               {/* If 'addFavClicked' is true then show a red heart to represent that the item has been added to 'favourites' or is already in 'favourites', else show a grey heart to show that the item is not in 'favourites' */}
               {addFavClicked ? (
                  // On click, run 'handleRemove'
                  <button onClick={handleRemove}>
                     <FontAwesomeIcon icon={faSolidHeart} className='clicked' />
                  </button>
               ) : (
                  // On click, run 'handleAdd'
                  <button onClick={handleAdd}>
                     <FontAwesomeIcon icon={faSolidHeart} />
                  </button>
               )}
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

export default Item