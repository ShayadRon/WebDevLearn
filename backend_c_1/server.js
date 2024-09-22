//load express into 'app'
const express = require("express");
const app = express();

//used to parse request.body in express usually in PUT or POST
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Cars',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection with mongoDB successful.")})
.catch((error) =>{console.log("Error trying to establish connection to mongoDB.")});

//middleware, Parse json data and add it to the request's body.
app.use(bodyParser.json())

//server needs a port to listen to, we have choosen 3000 here.
app.listen(3000, () => {
    console.log("Server started at port number 3000");
});

//creating GET request on '/' route. Usually '/' is home page.
app.get('/', (request, response) => {
    response.send("Hello, you are on '/' route.");
});

app.post('/api/cars', (request, response) => {
    const {car_name, car_brand} = request.body;
    console.log('Car Name : ', car_name);
    console.log('Car Brand : ', car_brand);
    response.send("Car details submitted succesfully.");
});

