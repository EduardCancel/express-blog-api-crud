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

    // Recover the slug
    const postSlug = parseInt(req.params.slug);

    // Find the post with slug

    const postFounds = post.find(post => post.slug === postSlug );

     // If not found return 404

    if (!postFounds) {

        return res.status(404).json({
            error: 'post not found'
        });
    }

    postFounds.title = req.body.title;
    postFounds.slug = req.body.title.replaceAll(' ', '-').toLowerCase();
    postFounds.content = req.body.content;
    postFounds.image = req.body.image;
    postFounds.tags = req.body.tags;
    

    res.sendStatus(204)
    res.json(postFounds)
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
