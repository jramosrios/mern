import React, { useState } from "react";
import { useParams } from "react-router-dom";

const WordAndColor = (props) => {
    const { word } = useParams()
    const { background } = useParams()
    const { textcolor } = useParams()
    return (
        <div>
            <h1 style={{ background: background, color: textcolor }}>The word is: {word}</h1>
        </div >
    )
}
export default WordAndColor