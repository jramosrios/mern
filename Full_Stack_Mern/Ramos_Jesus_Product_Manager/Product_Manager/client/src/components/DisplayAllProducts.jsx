import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const DisplayAllProducts = ({ products, setProducts }) => {

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProduct')
            .then((res) => {
                console.log(res)
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const removeFromDom = (id) => {
        const updatedProducts = products.filter((product) => product._id !== id)
        setProducts(updatedProducts)
    }

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
            .then((res) => {
                removeFromDom(id)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <h2>All Products:</h2>
            {
                products.map((product) => (
                    <div className='products' key={product._id}>
                        <Link to={`/oneProduct/${product._id}`}>{product.title}</Link>
                        <Link to={`/edit/${product._id}`} className='actionbuttons'>Edit</Link>
                        <button onClick={() => deleteHandler(product._id)} className='actionbuttons'>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default DisplayAllProducts