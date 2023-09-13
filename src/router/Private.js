import React from 'react'
import ProductDetailpage from '../page/ProductDetailpage'
import { Navigate } from 'react-router-dom'
const Private = ({authenticate}) => {
  return authenticate == true ? <ProductDetailpage/> : <Navigate to='/login'/>
}

export default Private