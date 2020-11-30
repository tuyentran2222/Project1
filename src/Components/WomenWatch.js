import React from 'react'
import {useContext} from 'react'
import {DataContext} from './DataProvider'
import ProductItem from './ProductItem'
function WomenWatch(){
    const [products,setProducts] =useContext(DataContext);
    const womanWatch=products.filter((product,index)=>{
        return product.sex==="female";
    })
    console.log(womanWatch);
    return(
        <div className="manWatch container" style={{marginTop:"40px"}}>
            <div className="title" style={{textTransform:'uppercase',fontSize:'30px'}}>Đồng hồ nữ</div>
            {womanWatch.map(product=>( <ProductItem item={product}/> ))}
        </div>
    )
    
}
export default WomenWatch;