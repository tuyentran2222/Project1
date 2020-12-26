import React from 'react'
import {useContext} from 'react'
import {DataContext} from './DataProvider'
import ProductItem from './ProductItem'
function ManWatch(){
    const value =useContext(DataContext);
    const [products]=value.products;
    const addCart=value.addCart;
    const manWatch=products.filter((product,index)=>{
        return product.sex==="male";
    })
    console.log(manWatch);
    return(
        <div className="manWatch container" style={{marginTop:"40px"}}>
            <div className="titleDetail" >Đồng hồ nam</div>
            {manWatch.map((product,index)=>( <ProductItem item={product} key={index} addCart={addCart}/> ))}
        </div>
    )
}
export default ManWatch;
