const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/post-controllers.js')


// Index

router.get('/', (req,res) => {
    res.send('Lista dei post')
})


// Show

router.get('/:slug', (req, res) => {
    res.send(`Dettaglio del posto ${req.params.slug}`)
})

// Create

router.post('/', (req,res) => {
    res.send('Creazione dei nuovi posti')
})

// Update 

router.put('/:slug', (req, res) => {
    res.send(`Aggiornamento del post ${req.params.slug}`)
})

// Destroy

router.delete('/:slug', (req,res) => {
    res.send(`Cancellazione del post ${req.params.slug}`)
})

module.exports = router;