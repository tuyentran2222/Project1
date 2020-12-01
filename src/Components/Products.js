import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {DataContext} from './DataProvider'
import ProductItem from './ProductItem'
function Products() {
    
    const value =useContext(DataContext);
    console.log(value);
    console.log(value.cart);
    const [products]=value.products;
    const addCart=value.addCart;
    return(
            <div className="product container">
                {products.map(product=>( <ProductItem item={product} addCart={addCart}/> ))}
             </div>
    );
}

export default Products;
