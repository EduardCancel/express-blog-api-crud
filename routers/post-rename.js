const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/post-controllers.js')


// Index

router.get('/', postControllers.index)


// Show

router.get('/:slug', postControllers.show)

// Create

router.post('/', postControllers.create)

// Update 

router.put('/:slug', postControllers.update)

// Destroy

router.delete('/:slug', postControllers.destroy)

module.exports = router;