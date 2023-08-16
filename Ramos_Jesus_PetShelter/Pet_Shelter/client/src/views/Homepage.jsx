import React, { useState } from "react";
import axios from 'axios'
import DisplayAllPets from "../components/DisplayAll";

const Homepage = (props) => {
    const [pets, setPets] = useState([])
    return (
        <div className="wrapper">
            <DisplayAllPets pets={pets} setPets={setPets} />
        </div>
    )
}
export default Homepage