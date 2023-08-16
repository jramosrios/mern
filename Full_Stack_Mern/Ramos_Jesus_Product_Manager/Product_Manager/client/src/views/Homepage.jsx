import React, { useState } from "react";
import axios from 'axios'
import ProductForm from "../components/ProductForm";
import DisplayAllProducts from "../components/DisplayAllProducts";

const Homepage = (props) => {
    const [products, setProducts] = useState([])
    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <DisplayAllProducts products={products} setProducts={setProducts} />
        </div>
    )
}
export default Homepage