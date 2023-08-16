import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Word = (props) => {
    const { word } = useParams()
    return (
        <div>
            <h1>The word is: {word}</h1>
        </div>
    )
}
export default Word