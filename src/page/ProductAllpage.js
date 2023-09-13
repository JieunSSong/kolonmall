import React from 'react'
import { useState, useEffect } from 'react';
import ProductBox from '../components/ProductBox';
import { useSearchParams } from 'react-router-dom';
const ProductAllpage = () => {
  const[productList, setProductList] = useState([]);
  // query 추가
  const [query, setQuery] = useSearchParams();

  //api호출
  const getProducts = async ()=>{
    // 추가
    let keyword = query.get('q') || '';
    console.log(keyword);

    let url =`https://my-json-server.typicode.com/JieunSSong/kolonmall/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
   useEffect(()=>{
     getProducts();
   },[query])

  return (
<div className='inner product_inner'>
      {/* productList 배열을 매핑하여 각 제품에 대한 ProductBox 컴포넌트를 생성 */}
      <div className='productWrap'>
        <ul className='productList'>
          {productList.map((product) => (
            <li>
              <ProductBox key={product.id} product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductAllpage