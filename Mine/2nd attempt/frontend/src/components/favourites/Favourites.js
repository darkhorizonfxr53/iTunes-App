import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Import components
import FavItem from '../fav-item/FavItem';

// Import CSS
import './favourites.css'

const Favourites = ({fetchFavourites, favourites}) => {
   return (
      <div className='favourites-container'>
         {/* Header section of the page */}
         <div className='header-section'>
            <div className='header-container'>
               <div className='back-btn'>
                  {/* Button to go back to Home */}
                  <Link to='/'>
                     <Button className='btn btn-success'>Back</Button>
                  </Link>
               </div>
               <div className='header'>
                  {/* Header title */}
                  Your Favourites
               </div>
               {/* Spacer is used to ensure that the title of the header is in the center of the page */}
               <div className='spacer'></div>
            </div>
         </div>
         <div className='favourites'>
            {/* If 'favourites' equals undefined... */}
            {(favourites === undefined) ? (// ...then display text saying that 'favourites' is empty...
               <div className='empty'>
                  There are currently no favourites to display.
               </div>
            ) : (// ...else display a list of favourites
               <div className='fav-items'>
                  {/* Map though 'favourites' and display  each item */}
                  {favourites && favourites.map((item) => (
                     // Component representing each item in 'favourites'
                     <FavItem
                        item={item}
                        key={item.id}
                        fetchFavourites={fetchFavourites}
                     />
                  ))}
               </div>
            )}
         </div>
      </div>
   )
}

export default Favourites
