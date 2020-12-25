import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { DataContext} from './DataProvider'
import ProductItem from './ProductItem';

export default function Detail(){
    const {id}=useParams();
    const value =useContext(DataContext);
    const [products]=value.products;
    const addCart=value.addCart;
    //filter
    const details=products.filter((product,index)=>{
        return product.id===id
    })
    const LQProduct=products.filter(
        (product,index)=>{
            return (product.price> details[0].price-500000 && product.price<details[0].price+500000)
        }
    )
    
    return(
        <div className="container" style={{marginTop:'40px'}}>
            <div className="titleDetail" style={{textTransform:'uppercase',fontSize:'30px',marginBottom:'25px'}}>Thông tin sản phẩm </div>
            {
                details.map((product,index)=>(
                    <div className="detail row border" key={index} >
                        <div className="col-lg-4 col-md-5 col-sm-8">
                            <img src={'.'+product.image} alt="watch"></img>
                        </div>
                        <div className="col-lg-8 col-md-7 border border-left" style={{textAlign:'left',lineHeight:'30px'}}>
                            <div>Tên sản phẩm: {product.nameProduct}</div>
                            <div>Giá khuyến mãi: {product.price*(1-product.discount)}đ</div>
                            <div>Giá gốc: {product.price}đ</div>
                            <div>Giới thiệu: {product.description}</div>
                            <div>Màu sắc:</div>
                            <div className="colors">
                                {
                                    product.color.map((cl,index)=>(
                                        <button key={index} className="btn btn-success" style={{marginRight:'5px'}}>{cl}</button>
                                    ))
                                }
                            </div>
                            <button className="btn btn-info" style={{marginTop:'10px',marginBottom:'15px',marginRight:'15px'}} onClick={()=>addCart(id)}><i className="fas fa-cart-plus"></i></button>
                            <button className="btn btn-info" style={{marginTop:'10px',marginBottom:'15px'}}>Mua ngay</button>
                        </div>
                    </div>
                )) 
            }
            <div style={{textTransform:'uppercase',fontSize:'30px',marginTop:'50px'}}>Các sản phẩm liên quan</div>
            <div>
                {
                    LQProduct.map((product,key)=>(
                        <ProductItem item={product} addCart={addCart}/> 
                    ))
                }           
            </div>   
        
        </div>
    )
}