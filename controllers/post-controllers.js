/* 
const post = require('') */

// Index

function index(req,res){
    res.send('Lista dei post')
}

// Function Show

function show(req,res){
    res.send(`Dettaglio del posto ${req.params.slug}`)
}

// Function Create

function create(req,res){
    res.send('Creazione dei nuovi posti')
}

// Function Update

function update(req, res){
    res.send(`Aggiornamento del post ${req.params.slug}`)
}

// Function Destroy

function destroy(req,res){
    res.send(`Cancellazione del post ${req.params.slug}`)
}

module.exports= {index, show, create, update, destroy}