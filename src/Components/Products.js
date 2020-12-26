import React,{useContext} from 'react'
import {DataContext} from './DataProvider'
import ProductItem from './ProductItem'

function Products() {
    const value =useContext(DataContext);
    const [products]=value.products;
    const addCart=value.addCart;
    return(
            <div className="product container">
                {products.map((product,key)=>(  <ProductItem key={key} item={product} addCart={addCart}/> ))}
            </div>
    );
}

export default Products;
