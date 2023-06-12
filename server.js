const express = require('express');
const { router } = require('./routes/todoRoutes')

// creating the app/server
const app = express();
//enable sending json on the body of the request
app.use(express.json())
// defines where the traffic/requests are redirected
app.use('/', router)

//handles undefined routes
app.use('*', (req, res)=>{
    res.status(404).json({
        success: false,
        message: "Not found"
    })
})

const port = 4000;

// start a server
app.listen(port, ()=>console.log(`Server running on port: ${port}`))