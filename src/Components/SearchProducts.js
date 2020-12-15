import React, { useContext, useState } from 'react'
import { useParams } from 'react-router';
import {DataContext} from './DataProvider'
import ProductItem from './ProductItem'
import SortProduct from './SortProduct'
export default function SearchProducts(){
    const value= useContext(DataContext);
    const [products,setProducts]=value.products;
    const {find}=useParams();
    const addCart =value.addCart;
    const [search,setSearch]=value.search;
    
    let searchProducts= products.filter(
        (product,index)=> (product.description.toUpperCase().includes(find.toUpperCase())||product.trademark.toUpperCase().includes(find.toUpperCase()))
    );
    setSearch(...searchProducts);
    console.log(searchProducts);
    console.log(search);
    
    return (
        <div>
            <div className="container" style={{marginTop:"40px"}}>
            <SortProduct/>
            <div className="title" style={{textTransform:'uppercase',fontSize:'30px'}}>Kết quả tìm kiếm</div>
            {  
                searchProducts.map((product,index)=>( <ProductItem item={product} addCart={addCart} />))
            }    
        </div>
        </div>
    )
}