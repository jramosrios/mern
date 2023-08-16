const PetShelterController = require('../controllers/petshelter.controller')

module.exports = (app) => {
    app.post('/api/newPet', PetShelterController.addPet)
    app.get('/api/allPets', PetShelterController.getAllPets)
    app.get('/api/onePet/:id', PetShelterController.getOnePet)
    app.put('/api/updatePet/:id', PetShelterController.updatePet)
    app.delete('/api/deletePet/:id', PetShelterController.deletePet)
}