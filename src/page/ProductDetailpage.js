import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/JieunSSong/kolonmall/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      {product ? (
        <div className='product_detail'>
          <div className='product_detail_img'>
            <img src={product?.img} alt={product.title} />
          </div>
          <div className='product_info'>
            <h2>{product?.title}</h2>
            <h3>{product?.price}</h3>
            <form>
              <select>
                {product?.size.length > 0 && product.size.map((item) => ( 
                  <option>{item}</option>
                ))}
              </select>
            </form>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetailpage;
