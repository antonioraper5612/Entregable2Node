const express = require('express');

// Controllers
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controller');


//middelware
const { createUserValidations, deleteUserValidations, validateResult } = require('../middelware/validators.middleware')
const { validateSession } = require('../middelware/auth.middelware')


const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/', createUserValidations, validateResult, createUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUserValidations, validateResult, deleteUser);

module.exports = { usersRouter: router };
