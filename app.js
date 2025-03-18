const express = require('express');
const app = express();
const port = 3000;
const postsRouters = require('./routers/post-rename.js')
const eror_404 = require('./middlewer/error_404.js')


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
app.use(eror_404)


// Server listen port 300

app.listen(port, () => {
    console.log(`Serve in ascolto su http://localhost:${port}`);
    
})