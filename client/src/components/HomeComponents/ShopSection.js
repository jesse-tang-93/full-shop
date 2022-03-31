import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";


const  ShopSection = ()=>{
   const {keyword,pagenumber} = this.props
   const dispatch = useDispatch()
   const productList = useSelector((state) => state.productList);
   const { loading, error, products, page, pages } = productList;

   return (
     <>
      <div className="container">
        <div className="section">
          
        </div>
      </div>
     </>
   )
}

export default ShopSection;