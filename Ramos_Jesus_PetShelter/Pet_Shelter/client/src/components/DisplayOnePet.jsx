import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const DisplayOnePet = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [pet, setPet] = useState({
        petName: "",
        petType: "",
        petDescription: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/onePet/${id}`)
            .then((res) => {
                setPet(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const removeFromDom = (id) => {
        const updatedPets = pets.filter((pet) => pet._id !== id)
        setProducts(updatedPets)
    }
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deletePet/${id}`)
            .then((res) => {
                navigate('/')
                removeFromDom(id)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="wrapper">
            <div className="nav">
                <h2>Details about: {pet.petName}</h2>
                <div className="buttons">
                    <Link to={'/'}>Back to home</Link>
                    <button onClick={() => deleteHandler(pet._id)}>Adopt {pet.petName}</button>
                </div>
            </div>

            <div className="detailBox">
                <div className="detailText">
                    <p>Pet Type: </p>
                    <p>Description: </p>
                    <p>Skills</p>
                </div>
                <div className="petDetails">
                    <p>{pet.petName}</p>
                    <p>{pet.petDescription}</p>
                    <p>{pet.skillOne}</p>
                    <p>{pet.skillTwo}</p>
                    <p>{pet.skillThree}</p>
                </div>
            </div>
        </div>
    )
}
export default DisplayOnePet