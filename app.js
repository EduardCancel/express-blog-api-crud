const express = require('express');
const app = express();
const port = 3000;
const postsRouters = require('./routers/post-rename.js')


// Server listen port 300

app.listen(port, () => {
    console.log(`Serve in ascolto su http://localhost:${port}`);
    
})

// Define home route

app.get('/', (req,res) => {
    res.send('Welcome to our server')
    
})


app.use("/api/v1/post",postsRouters);