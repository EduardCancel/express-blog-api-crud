const post = require('../data/post-1.js'); 

// Index - Restituisce tutti i post
function index(req, res) {
    res.json(post);
}

// Show - Restituisce un post specifico in base allo slug
function show(req, res) {
    const postSlug = req.params.slug;
    console.log("Slug ricevuto:", postSlug); 
    console.log(post);
    
    const postFound = post.find(post => post.slug === postSlug);

    if (!postFound) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    res.json(postFound);
}

function store(req, res) {

    //  Create a new slug
    const newSlug = post[post.length -1].slug +1;

    // Create a new object post
    const newPosts = {
        title: req.body.title,
        slug: newSlug,
        content : req.body.content,
        image : req.body.image,
        tags : req.body.tags,

    }

    console.log(req.body); 
    
}

// Update - Aggiorna un post esistente (da implementare)
function update(req, res) {
    res.send(`Aggiornamento del post ${req.params.slug}`);
}

// Destroy - Elimina un post
function destroy(req, res) {
    const postSlug = req.params.slug;

    // Trova il post con lo slug corrispondente
    const postFound = post.find(post => post.slug === postSlug);

    if (!postFound) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    // Rimuove il post dall'array utilizzando l'indice trovato
    const index = post.indexOf(postFound);
    post.splice(index, 1); // Rimuove l'elemento all'indice trovato
    

    res.sendStatus(204); 
}

module.exports = { index, show, store, update, destroy, };
