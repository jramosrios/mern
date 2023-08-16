import React from "react";
import { useParams } from "react-router-dom";
const Num = (props) => {
    const { number } = useParams()
    return (
        <div>
            <h1>The number is: {number}</h1>
        </div>
    )
}
export default Num