import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {DataContext} from './DataProvider'
import ProductItem from './ProductItem'
function Products() {
    const [products,setProducts]=useContext(DataContext)
    console.log(products);
    return(
            <div className="product container">
                {products.map(product=>( <ProductItem item={product}/> ))}
             </div>
    );
}

export default Products;
