const MealsController = require('../controllers/meals.controller')

module.exports = app => {
    app.post('/api/meals', MealsController.createNewMeals),
    app.patch('/api/meals/edit/:id', MealsController.updateMeals),
    app.get('/api/meals/:id', MealsController.deleteMeals),
    app.get('/api/meals/:id', MealsController.getOneMeals ),
    app.get('/api/meals', MealsController.getAllMeals)
}