const express = require('express');

// Controllers
const {
    getAllActors,
    getActorById,
    createActor,
    updateActor,
    deleteActor
} = require('../controllers/actors.controller');

const { createActorValidations, validateResult } = require('../middelware/validators.middleware')


const router = express.Router();

router.get('/', getAllActors);

router.get('/:id', getActorById);

router.post('/', createActorValidations, validateResult, createActor);

router.patch('/:id', updateActor);

router.delete('/:id', deleteActor);

module.exports = { actorsRouter: router };
