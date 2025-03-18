const express = require('express');
const app = express();
const port = 3000;
const postsRouters = require('./routers/post-rename.js')


// Middlewer 
const errorHandler = require('./middlewer/error_500.js')

// Route Global
app.use(express.json())
app.use("/api/v1/post",postsRouters);



// Define home route

app.get('/', (req,res) => {
    res.send('Welcome to our server')
    
    console.log(req.body);
    
})


// Midllewer invocation

app.use(errorHandler);


// Server listen port 300

app.listen(port, () => {
    console.log(`Serve in ascolto su http://localhost:${port}`);
    
})