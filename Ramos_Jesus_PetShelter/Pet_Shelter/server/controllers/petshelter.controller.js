const PetShelter = require('../models/petshelter.model')
module.exports = {
    addPet: (req, res) => {
        console.log(req.body)
        PetShelter.create(req.body)
            .then((newPet) => {
                res.status(201).json(newPet)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    getAllPets: (req, res) => {
        PetShelter.find({})
            .then((allPets) => {
                res.status(200).json(allPets)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    getOnePet: (req, res) => {
        const id = req.params.id
        PetShelter.findById(id)
            .then((onePet) => {
                res.status(200).json(onePet)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    updatePet: (req, res) => {
        const id = req.params.id
        PetShelter.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedPet) => {
                res.status(200).json(updatedPet)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    deletePet: (req, res) => {
        const id = req.params.id
        PetShelter.deleteOne({ _id: id })
            .then((onePet) => {
                res.status(200).json(onePet)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}