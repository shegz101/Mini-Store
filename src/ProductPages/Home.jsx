import React from "react";
import '../App.css';
import ProductCard from "../Components/ProductCard";
import { useState, useEffect } from "react";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [pending, setPending] = useState(true);
    const productsAll =  async () => {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
        setPending(false);
    }

    useEffect(() => {
        productsAll();
    }, [])
    return ( 
        <div>
          {pending && <div className="loader"></div>}
          {
            products.length > 0 
            ? (
                <div className="product-container">
                    {products.map((product) => (
                    <>
                        <ProductCard key={product.id} product={product}/>
                    </>
                    ))}
                </div>
            ) : (
                console.log("Data not found")
            )
         }
        </div>
    );
}
 
export default Home;