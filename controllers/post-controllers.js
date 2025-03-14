
const post = require('../data/post-1.js') 

// Index

function index(req,res){
    // res.send('Lista dei post')

    res.json(post)
}

// Function Show

function show(req,res){
    // res.send(`Dettaglio del posto ${req.params.slug}`)

    const postSlug = req.params.slug;

    const postFound = postFound.find(postFound => postFound.slug === postSlug);
    console.log(postFound);

    if (!postFound) {
        return res.status(404).json({ error: "Post non trovato" });
    } 
    
    res.json(postFound)
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