const express = require('express');
const app = express();
const port = 8000;
require('./config/mongoose.config');
app.use(express.json(), express.urlencoded({extended: true}));
const MealsRoutes = require('./routes/meals.route')
MealsRoutes(app)
    
app.listen(port, () => console.log(`server is running on port: ${port}`) );
