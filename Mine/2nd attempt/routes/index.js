const express = require('express')
const router = express.Router()

//Create an empty array of objects. Each object will represent an item
let favourites = [];

//Handler for the GET request
getFavouritesHandler = (req, res) => {
    //If there are no favourites, then...
    if(favourites.length ==- 0) {
        //... send a message to say there is nothing to display...
        res.send({
            message: "You have no favourites to display."
        })
    } else {
        // ... otherwise, send the array of favourites
        res.send({
            favourites
        })
    }
}

//GET - displays all the items within the favourites array
router.get('/', getFavouritesHandler)

//Handler for the POST request
postFavouritesHandler = (req, res) => {
    //Create unique id
    const id = Math.floor(100000 + Math.random() * 900000)

    //Create a new item
    newItem = Object.assign(req.body)
    //Add the new item to the existing items
    favourites.push(newItem)

    //Display message and all the items
    return res.send({
        message: "Item added successfully",
        favourites
    })
}

//POST - Adds an item to the favourites array
router.post('/add', postFavouritesHandler)

//Handler for the DELETE request
deleteFavouritesHandler = (req, res) => {
    //Find the id in the URL
    const id = Number(req.params.id);

    //Loop through the items and splice the item specified
    for(let i = 0; i < favourites.length; i++){
        if(favourites[i].id === id) {
            favourites.splice(i, 1)
        };
    };

    //Display the message and the items
    res.send({
        message: `Item with id${id} has been deleted`,
        favourites
    }) 
}

//DELETE - removes a specific item from favourites.json
router.delete('/delete/:id', deleteFavouritesHandler)

module.exports = router