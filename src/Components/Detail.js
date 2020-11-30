import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { DataContext} from './DataProvider'

export default function Detail(){
    const {id}=useParams();
    const [products,setProducts] =useContext(DataContext);
    //filter
    const details=products.filter((product,index)=>{
        return product.id===id
    })
    console.log(details.length);
    console.log(details[0].image);
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
                                        <button className="btn btn-success" style={{marginRight:'5px'}}>{cl}</button>
                                    ))
                                }
                            </div>
                            <button className="btn btn-info" style={{marginTop:'10px',marginBottom:'15px',marginRight:'15px'}}><i className="fas fa-cart-plus"></i></button>
                            <button className="btn btn-info" style={{marginTop:'10px',marginBottom:'15px'}}>Mua ngay</button>
                        </div>
                    </div>
                )) 
            }   
        
        </div>
    )
}