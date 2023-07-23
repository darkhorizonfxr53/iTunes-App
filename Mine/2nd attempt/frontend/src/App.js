// Import components from react
import React, { useState } from 'react';
// Import react-router-dom components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Import components
import Home from './components/home/Home';
import Favourites from './components/favourites/Favourites';

// Import CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [favourites, setFavourites] = useState();// useState to save the list of favourites

  // Function to fetch the list of favourites
  const fetchFavourites = async () => {
    const result = await fetch('/api');// Make the API call
    const data = await result.json();// Change the result into json format
    setFavourites(data.favourites);// Save the data in 'favourites'
  }

  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* Define routes */}
          {/* Route to go to 'Home' */}
          <Route path='/' exact>
            <Home 
              fetchFavourites={fetchFavourites}
              favourites={favourites}
            />
          </Route>
          {/* Route to go to 'Favourites' */}
          <Route path='/favourites'>
            <Favourites 
              fetchFavourites={fetchFavourites}
              favourites={favourites}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
