import React from 'react'
import {useContext} from 'react'
import {DataContext} from './DataProvider'
import ProductItem from './ProductItem'
function WomenWatch(){
    const value =useContext(DataContext);
    const [products]=value.products;
    const addCart=value.addCart;
    const womanWatch=products.filter((product,index)=>{
        return product.sex==="female";
    })
    console.log(womanWatch);
    return(
        <div className="manWatch container" style={{marginTop:"40px"}}>
            <div className="title" style={{textTransform:'uppercase',fontSize:'30px'}}>Đồng hồ nữ</div>
            {womanWatch.map((product,key)=>( <ProductItem item={product} key={key} addCart={addCart}/> ))}
        </div>
    )
}
export default WomenWatch;