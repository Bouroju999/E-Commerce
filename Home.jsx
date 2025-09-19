import './Home.css'
import React from 'react'
import Carousel from '../../Components/Carousel/Carousel';
import CategoryCard from '../../Components/CategoryCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
function Home() {
    const [storeProducts, setStoreProducts] = useState([])
    useEffect(() => {
        async function getProducts() {
            let k = await axios.get('https://dummyjson.com/products?limit=15')
            localStorage.setItem("cartItems",[])
            setStoreProducts(k.data.products);
        }
        getProducts();
    }, [])

    return (
        <>
            <Carousel />
            <div>
                <h1>Categories</h1>
                <div className='d-flex justify-content-start column-gap-3'>
                    <CategoryCard fileName={'food.png'} categoryName={'Food'}/>
                    <CategoryCard fileName={'Clothes.png'} categoryName={'Clothes'}/>
                    <CategoryCard fileName={'kitchen.png'} categoryName={'Kitchen Appliances'}/>
                    <CategoryCard fileName={'furniture.png'} categoryName={'Furniture'}/>
                    
                </div>

            </div>
            <div>
                <h1>Products</h1>
                <div className='d-flex justify-content-start column-gap-3 row-gap-3 flex-wrap'>
                    {storeProducts && storeProducts.length > 1 && storeProducts.map(product => {
                        return <ProductCard product={product} />
                    })}
                </div>
            </div>
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
        </>
    )
}
export default Home;