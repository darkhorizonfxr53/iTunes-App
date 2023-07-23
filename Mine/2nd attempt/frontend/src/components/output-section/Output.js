// Import react
import React from 'react';
// Import component
import Item from '../output-item/Item';

// Import css
import './output.css';

const Output = ({ output, fetchFavourites, favourites }) => {
   return(
      <div className='output-container'>
         {/* If the results does not equal undefined */}
         {(output.results !== undefined) ? (
            <>
               {/* ...then determine if there are items to display or if there were no results to display */}
               {/* If the number of results does not equal 0... */}
               {(output.resultCount !== 0) ? (
                  <>
                  {/* ...then list the output items... */}
                  <div className='output-items'>
                     {/* Map through the output and display each item */}
                     {output && output.results.map((item) => (
                        // Component representing each item
                        <Item
                           item={item}
                           key = {
                              // If there is a 'trackId' then use 'trackId' as the key...
                              item.trackId ? item.trackId : (// ...else...
                                 // ...if there is an 'artistId' and a 'collectionId'...
                                 item.artistId && item.collectionId ? (// ...then...
                                    // ...add 'artistId' and 'collectionId' and use that as the key...
                                    Number(item.artistId) + Number(item.collectionId)
                                 ) : (// ...else...
                                    // ...if there is just an 'artistId' then use 'artistId' as the key, else use the 'collectionId' as the key
                                    item.artistId ? item.artistId : item.collectionId
                                 )
                              )
                           }
                           fetchFavourites={fetchFavourites}
                           favourites={favourites}
                        />
                     ))}
                  </div>
                  </>
               ) : (
                  <>
                  {/* ...else show error text */}
                  <div className='error-text'>
                     Sorry, no results were found for your search.
                  </div>
                  </>
               )}
            </>
         ) : (
            <>
            {/* ...else show welcome text */}
            <div className='welcome-text'>
               Welcome! Please enter a search term above and click 'Search'.
            </div>
            </>
         )}
      </div>
   )
};

export default Output;
