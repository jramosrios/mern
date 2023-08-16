import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
const DisplayAllPets = ({ pets, setPets }) => {
    useEffect(() => {
        axios.get('http://localhost:8000/api/allPets')
            .then((res) => {
                console.log(res)
                setPets(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className="wrapper">
            <div className="nav">
                <h2>These pets are looking for a good home</h2>
                <Link to={'/petForm'}>Add a pet to the Shelter</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet) => (
                            <tr key={pet._id}>
                                <td>{pet.petName}</td>
                                <td>{pet.petType}</td>
                                <td>
                                    <Link to={`/onePet/${pet._id}`}>Details | </Link>
                                    <Link to={`/editPet/${pet._id}`}>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default DisplayAllPets