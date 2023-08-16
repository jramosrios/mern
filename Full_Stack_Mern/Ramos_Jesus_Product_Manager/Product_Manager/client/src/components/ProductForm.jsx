import React, { useState } from "react";
import axios from 'axios'
import DisplayAllProducts from "./DisplayAllProducts";
import { Navigate } from "react-router-dom";
const ProductForm = ({ products, setProducts }) => {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newProduct', product)
            .then((res) => {
                console.log(res)
                // navigate('/')
                setProduct([...products, res.data])
            })
            .catch((err) => {
                setErrors(errors.response.data.errors)
                // res.json(err)
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="label">
                    <label >Title</label>
                    <input type="text" name="title" value={product.title} onChange={changeHandler} />
                </div>
                <div className="label">
                    <label>Price</label>
                    <input type="number" name="price" value={product.price} onChange={changeHandler} />
                </div>
                <div className="label">
                    <label>Description</label>
                    <input type="text" name="description" value={product.description} onChange={changeHandler} />
                </div>
                <button className="actionbuttons" >Create</button>
            </form>
        </div>
    )
}
export default ProductForm