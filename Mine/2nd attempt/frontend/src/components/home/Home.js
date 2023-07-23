// Import components from react
import React, { useState } from 'react'
// Import components
import Header from '../header/Header'
import SearchContainer from '../search-section/SearchContainer'
import Output from '../output-section/Output'

// Import CSS
import './home.css'

const Home = ({fetchFavourites, favourites}) => {
   const [term, setTerm] = useState('');// useState to save the search term
   const [media, setMedia] = useState('all');// useState to save the media type
   const [output, setOutput] = useState({});// useState to save the search results

   // Function to fetch the search results
   const fetchOutput = async () => {
      // Make the API call by sending the search term and media type to the backend using key and value pairs
      const result = await fetch(`/search?term=${term}&media=${media}`);
      const data = await result.json();// Change the result into json format
      setOutput(data.response);// Save the fetched data in 'output'
   }

   // Function to handle the search submission
   const handleSubmit = (e) => {
      e.preventDefault();
      // If there is no value within the term input...
      if (term === '') {// then alert the user to enter a search term before searching...
         alert(`Please enter a term before searching`);
      } else {// , else run 'fetchOutput()' to make the API call
         fetchOutput();
      }
   }

   // Function to handle the term change
   const handleTermChange = (e) => {
      setTerm(e.target.value);// Get the value from the input and save it in 'term'
   }

   // Function to handle the media type change
   const handleMediaChange = (e) => {
      setMedia(e.target.value);// Get value from the input and save it in 'media'
   }

   return (
      <div className='home'>
         <div className='header-section'>
            {/* Header component */}
            <Header />
         </div>
         <div className='search-and-output'>
            <div className='search-container-section'>
               {/* Search container component containing the term input, media input and search button */}
               <SearchContainer
                  handleSubmit={handleSubmit}
                  term={term}
                  handleTermChange={handleTermChange}
                  handleMediaChange={handleMediaChange}
               />
            </div>
            <div className='output-container-section'>
               {/* Output section to display the search results */}
               <Output 
                  output={output}
                  fetchFavourites={fetchFavourites}
                  favourites={favourites}
               />
            </div>
         </div>
      </div>
   )
}

export default Home
