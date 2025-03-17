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
    const newSlug = req.body.title.toLowerCase().replaceAll(" ", "-")

    // Create a new object post
    const newPosts = {
        title: req.body.title,
        slug: newSlug,
        content : req.body.content,
        image : req.body.image,
        tags : req.body.tags,
    }

    // Add new post
    post.push(newPosts)

    // Controll
    console.log(post);

    // Return status

    res.status(201);
    res.json(newPosts)
    
}

// Update - Aggiorna un post esistente (da implementare)
function update(req, res) {
    // Recuperiamo lo slug
    const postSlug = req.params.slug;

    // Troviamo il post con lo slug
    const postFound = post.find(post => post.slug === postSlug);

    // Se il post non è trovato, restituiamo un errore 404
    if (!postFound) {
        return res.status(404).json({
            error: 'Post non trovato'
        });
    }

    // Aggiorniamo i dati del post
    postFound.title = req.body.title || postFound.title;
    postFound.slug = req.body.title.replaceAll(' ', '-').toLowerCase()
    postFound.content = req.body.content; 
    postFound.image = req.body.image; 
    postFound.tags = req.body.tags;

    // Restituiamo il post aggiornato con una risposta 201 OK
    res.status(201).json(postFound);

    console.log(postFound);
    console.log(post);
    
    
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
    
    console.log(post);
    

    res.sendStatus(204); 
}

module.exports = { index, show, store, update, destroy, };
