const express = require('express');
const axios = require('axios');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const deathController = require("../controllers/death");


const deaths = [];
// .../deaths/
/* GET deaths listing. */
router.get('/', deathController.findAll);

// .../deaths/86
/* GET one death. */
router.get('/:id', deathController.findOne);

// ..../deaths/
/* PUT new death. */
router.put('/', deathController.adddeath);

/*DELETE death. 
router.delete('/:id', deathController.deleteOne);

/* UPDATE death. 
router.post('/:id', deathController.modifyFilm);
*/
module.exports = router;


    