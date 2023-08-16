import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/edit/${id}`, product)
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                setErrors(errors.response.data.errors)
                // res.json(err)
            })
    }
    return (
        <div>
            <div>Edit Product</div>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={product.title} onChange={changeHandler} />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" name="price" value={product.price} onChange={changeHandler} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="description" value={product.description} onChange={changeHandler} />
                    </div>
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}
export default UpdateProduct