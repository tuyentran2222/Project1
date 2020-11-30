import React from 'react'
import {useContext} from 'react'
import {DataContext} from './DataProvider'
import ProductItem from './ProductItem'
function ManWatch(){
    const [products,setProducts] =useContext(DataContext);
    const manWatch=products.filter((product,index)=>{
        return product.sex==="male";
    })
    console.log(manWatch);
    return(
        <div className="manWatch container" style={{marginTop:"40px"}}>
            <div className="title" style={{textTransform:'uppercase',fontSize:'30px'}}>Đồng hồ nam</div>
            {manWatch.map((product,index)=>( <ProductItem item={product}/> ))}
        </div>
    )
    
}
export default ManWatch;
