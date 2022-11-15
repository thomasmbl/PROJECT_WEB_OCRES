const express = require('express');
const axios = require('axios');

// Lodash utils library
const _ = require('lodash');

const router = express.Router();

// Create RAW data array
let admin = [];


// On insère un death initial
const death = "season1";
const url = `http://www.omdbapi.com/?i=tt3896198&apikey=d3eee70d=${death}`;


// Make a request for a movie
axios.get(url)
.then(function (response) {
  // handle success
  if(response.data){
    const {season, numberOfDeath} = response.data;
    
    movies.push({
      id: _.uniqueId(),
      death: season,
      numberOfDeath: number,
      
      rottenTomatoesScore: Ratings && Ratings[1].Value
    });
  }
  console.log(admin);
});

// .../admin/
/* GET admin listing. */
router.get('/', (req, res) => {
    // Get List of admin and return JSON
    res.status(200).json({ admin });
  });


// .../movies/86
/* GET one death. */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    // Find movie in DB
    const death = _.find(admin, ["id", id]);
  
    if(death) {
      // Return death
      res.status(200).json({
        message: 'death found!',
        death 
      });
    } else {
      res.status(404).json({
        message: 'death not found!'
      });
    }
  });


// ..../admin/
/* PUT new death. */
router.put('/', (req, res) => {
    // Get the data from request from request
    const { death } = req.body;
    
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=d3eee70d=${death}`;
    
    // Make a request for a movie
    axios.get(url)
    .then((data) => {
      // handle success
      if(data.data){
        const {season, number} = data.data;
        const newDeath = {
          id: _.uniqueId(),
          death: season,
          numberOfDeath: number,
          
          rottenTomatoesScore: Ratings && Ratings[1].Value
        }
        
        admin.push(newDeath);
        // Return validation message
      res.json({
        message: `Just added ${season}`,
        death: { newDeath },
      });
    } else {
    res.json({
      message: `death not found`
    });}
  })
  .catch(function (error) {
    // handle error
    res.json({error});
  }); 
});


/* DELETE death. 
router.delete('/:id', (req, res) => {
  // Get the :id of the death we want to delete from the params of the request
  const { id } = req.params;
  
  // Remove from "DB"
  _.remove(movies, ["id", id]);
  
  // Return message
  res.json({
    message: `Just removed ${id}`
  });
});
*/

/* UPDATE death. 
router.post('/:id', (req, res) => {
  // Get the :id of the death we want to update from the params of the request
  const { id } = req.params;
  // Get the new data of the death we want to update from the body of the request
  const { death } = req.body;
  // Find in DB
  const deathToUpdate = _.find(admin, ["id", id]);
  // Update data with new data (js is by address)
  deathToUpdate.death = death;
  
  // Return message
  res.json({
    message: `Just updated ${id} with ${death}`
  });
});*/

module.exports = router;

    