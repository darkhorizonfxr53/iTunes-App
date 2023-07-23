import React from 'react'
// Import react-bootstrap components
import { Button, Form, FormControl, FormGroup, FormSelect } from 'react-bootstrap'

// Import CSS
import './search-container.css'

const SearchContainer = ({
      handleSubmit,
      term,
      handleTermChange,
      handleMediaChange
   }) => {
   // Array containing objects representing each media type and their corresponding value
   const media = [
      {type: 'All media', value: 'all'},
      {type: 'Movie', value: 'movie'},
      {type: 'Podcast', value: 'podcast'},
      {type: 'Music', value: 'music'},
      {type: 'Music video', value: 'musicVideo'},
      {type: 'Audio book', value: 'audiobook'},
      {type: 'Short film', value: 'shortFilm'},
      {type: 'TV show', value: 'tvShow'},
      {type: 'Software', value: 'software'},
      {type: 'Ebook', value: 'ebook'}
   ];

   return (
      <div className='search-container'>
         {/* On form submit run 'handleSubmit' */}
         <Form onSubmit={handleSubmit}>
            <FormGroup className='form-group search-box'>
               {/* Search box where a term is entered that the user wants to search for */}
               <FormControl
                  type='text'
                  className='search-bar'
                  placeholder='Search here...'
                  name='term'
                  value={term}
                  onChange={handleTermChange}
               />
            </FormGroup>
            <FormGroup className='form-group filter'>
               {/* Dropdown containing a list of media types */}
               <FormSelect onChange={handleMediaChange}>
                  {/* Map through media array to create a list of options to select from */}
                  {media && media.map((media) => (
                     <option key={media.value} value={media.value}>
                        {media.type}
                     </option>
                  ))}
               </FormSelect>
            </FormGroup>
            <FormGroup className='submit-btn'>
               {/* Submit button that will run the search */}
               <Button variant='secondary' type='submit'>
                  Search
               </Button>
            </FormGroup>
         </Form>
      </div>
   )
}

export default SearchContainer
