import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const DisplayOne = (props) => {
    const { id } = useParams()

    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res) => {
                console.log(res)
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <h2>{product.title}</h2>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
        </div>
    )
}
export default DisplayOne