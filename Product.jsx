import './Product.css';
import { useState, useEffect } from 'react';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Product() {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    useEffect(() => {
        async function productDetails() {
            if (id) {
                let product = await axios.get('https://dummyjson.com/products/' + id)
                setProduct(product.data)
            }
        }
        productDetails()
    }, [])
    return (
        <>
            <div className='ProductPage d-flex'>
                <div className='productImagesDiv halfDiv d-flex justify-content-center align-items-center'>
                    <ProductCarousel images={product.images} />
                </div>
                <div className='productInfoDiv halfDiv d-flex align-items-start'>
                    <div className='d-flex flex-column row-gap-3 p-4'>
                        <h1>{product.title}</h1>
                        <h3>Price ${product.price}</h3>
                        <h5>{product.category}</h5>
                        <p>{product.description}</p>
                        <button className='btn btn-primary btn-lg w-25' onClick={()=>addToCart(product.id)}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;