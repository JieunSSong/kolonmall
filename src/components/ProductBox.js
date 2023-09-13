import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProductBox = ({ product }) => {
  const navigate = useNavigate();
  const showProduct = () =>{
    navigate(`/products/${product.id}`)
  } 
  return (
    <div className='productBox' onClick={()=>{showProduct(product.id)}}>
      <div className='productImgBox'>
        <img src={product.img} alt={product.title} />
      </div>
      <p>KOLON SPORT</p>
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
      <span>{product.tag}</span>
    </div>
  )
}

export default ProductBox