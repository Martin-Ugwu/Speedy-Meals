const Meals = require('../models/meals.model');

module.exports.createNewMeals = (req, res) => {
    Meals.create(req.body)
    .then((newMeals) => {
        res.json({meals: newlyCreatedMeals});
    })
    .catch((err) => {
        res.json({message: 'something went wrong', error: err})
    })
}

module.exports.updateMeals =(req, res) => {
    Meals.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((updatedMeals) => {
        res.json(updatedMeals)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.deleteMeals =(req, res) =>{
    Meals.deleteOne({_id: req.params.id})
    .then((confirmation) => {
        res.json(confirmation)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.getOneMeals = (req, res) => {
    Meals.findOne({_id: req.params.id})
    .then((meals) => {
        res.json(meals)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.getAllMeals = (request, response) => {
    Meals.findOne({_id:request.params.id})
        .then((meals) => {
            response.json(meals)
        })
        .catch((err) => {
            response.json(err)
        });
}


