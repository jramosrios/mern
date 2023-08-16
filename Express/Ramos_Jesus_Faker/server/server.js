const express = require("express");
const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { faker } = require('@faker-js/faker')

const createUser = () => {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
    }
}
const createCompany = () => {
    return {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
}

app.get('/api/users/new', (request, response) => {

    response.json(newUser)
})

app.get('/api/companies/new', (request, response) => {
    const newCompany = createCompany()
    response.json(newCompany)
})

app.get('/api/user/company', (request, response) => {
    const newUser = createUser()
    const newCompany = createCompany()
    const userCompany = {
        user: newUser,
        company: newCompany
    }
    response.json(userCompany)
})

app.listen(port, () => console.log(`Listening on port: ${port}`));