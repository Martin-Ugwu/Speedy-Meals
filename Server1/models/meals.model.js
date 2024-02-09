const mongoose = require('mongoose');

const MealsSchema = new mongoose.Schema({
    dish_name: {type: String, 
    required: [true,'dish name  reqiured'], 
    minlength: [3, "dish name must be at least 3 characters long"],
    maxlength: [20, "dish name must be less than 20 characters long"]
},
    total_minutes: {type: Number, required: [true,'dish cook time reqiured'],
    min: [2, "meals must be cooked atleast for 2 minutes  "],
    max: [240, "meals must be cooked for not more than 240"]
},

    directions: {type: String,required: [true,'dish direction reqiured'],
    minlength: [10, "direction must be at least 10 characters long"],
},
},)

const Meals = mongoose.model('Meals', MealsSchema);
module.exports = Meals;