const mongoose = require('mongoose');

const PetShelterSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, 'You must add the name'],
        minLength: [3, 'Name must be at least 3 characters long']
    },
    petType: {
        type: String,
        required: [true, 'You must add the type'],
        minLength: [3, 'Name must be at least 3 characters long']
    },
    petDescription: {
        type: String,
        required: [true, 'You must add the name'],
        minLength: [3, 'Name must be at least 3 characters long']
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    }
}, { timestamps: true })

const PetShelter = mongoose.model('PetShelter', PetShelterSchema)
module.exports = PetShelter