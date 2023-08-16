import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const PetForm = (pets, setPets) => {
    const [pet, setPet] = useState({
        petName: "",
        petType: "",
        petDescription: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",
    })
    const navigate = useNavigate()

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setPet({ ...pet, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newPet', pet)
            .then((res) => {
                console.log(res)
                navigate('/')
                setPet([...pets, res.data])
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <div className="nav">

                <h1>Know a pet needing a home?</h1>
                <Link to={'/'} >Back to home</Link>
            </div>
            <div>
                <form className="formBox" onSubmit={submitHandler}>
                    <div className="left">
                        <div>
                            <label>Pet Name:</label>
                            <br />
                            <input type="text" name="petName" value={pet.petName} onChange={changeHandler} />
                            {
                                errors.petName ?
                                    <p>{errors.petName.message}</p> :
                                    null
                            }
                        </div>
                        <div>
                            <label>Pet Type:</label>
                            <br />
                            <input type="text" name="petType" value={pet.petType} onChange={changeHandler} />
                            {
                                errors.petType ?
                                    <p>{errors.petType.message}</p> :
                                    null
                            }
                        </div>
                        <div>
                            <label>Pet Description:</label>
                            <br />
                            <input type="text" name="petDescription" value={pet.petDescription} onChange={changeHandler} />
                            {
                                errors.petDescription ?
                                    <p>{errors.petDescription.message}</p> :
                                    null
                            }
                        </div>
                        <button>Add Pet</button>
                    </div>
                    <div className="right">
                        <div>
                            <label>Skill 1:</label>
                            <br />
                            <input type="text" name="skillOne" value={pet.skillOne} onChange={changeHandler} />
                        </div>
                        <div>
                            <label>Skill 2:</label>
                            <br />
                            <input type="text" name="skillTwo" value={pet.skillTwo} onChange={changeHandler} />
                        </div>
                        <div>
                            <label>Skill 3:</label>
                            <br />
                            <input type="text" name="skillThree" value={pet.skillThree} onChange={changeHandler} />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default PetForm