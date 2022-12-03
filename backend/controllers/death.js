const mongoose = require('mongoose');
const axios = require('axios');

const deaths = require('../models/death');

exports.findAll = (req, res) => {
    deaths.find({}).then((deaths)=>{
        // Get List of death and return JSON
        res.status(200).json({ deaths });
    })  
}

exports.findOne = (req, res) => {
    const { id } = req.params;

    // Find death which has [id] name in DB
    death.findOne({ death: id })
    .then(death => {
        if(death) {
            // Return death
            res.status(200).json({
            message: 'death found!',
            death 
            });
        } else {
            res.status(404).json({
            message: `death ${id} not found!`
            });
        }
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: 'death not found with id' + req.paramas.deathId
            });
        }
        
        return res.status(500).send({
            message: 'Error retrieving death with id' + req.paramas.deathId
        });
    })
}

exports.adddeath = (req, res) => {
    // Get the data from request from request
    const { death } = req.body;
    const url = `http://localhost:3001/deaths`;
    
    // Make a request for a death
    axios.get(url)
    .then((data) => {
        // handle success
        if(data.data){
            const {season, number} = data.data;
            const newDeath = {
                death: season,
                numberOfDeath : number,
                
            //rottenTomatoesScore: Ratings && Ratings[1].Value
            }
            
            deaths.create(newdeath).then(death => {
                console.error(death);
                if(death) {
                    // Return validation message
                    res.status(200).json({
                        message: `Just added ${season}`,
                        death: { newDeath },
                    });
                }
            }).catch(error => {
                res.status(404).json({
                    theerror: error,
                });
            });
            
        } else {
            res.status(404).json({
                message: `death not found`
            });
        }
    })
    .catch(function (error) {
        // handle error
        res.json({error, 
            death: deaths
        });
    }); 
}


/*Pas testé
exports.deleteOne = (req, res) => {
    // Get the :id of the death we want to delete from the params of the request
    const { id } = req.params;
    
    deaths.deleteOne({ _id: id }).then((death) => {
        res.status(200).json({ 
            death,
            message: `${death} deleted !` 
        });
    }).catch(() => {
        res.status(404).json({ 
            message: `death not found !` 
        });
    })
}

// Pas testé
exports.modifyFilm = (req, res) => {
    // Get the :id of the death we want to update from the params of the request
    const { id } = req.params;
    // Get the new data of the death we want to update from the body of the request
    const { death } = req.body;


    deaths.findByIdAndUpdate(id, { ...death }).then(()=> {
        // Return message
        res.json({
          message: `death updated: ${death}`
        });
    });    
  }

*/

