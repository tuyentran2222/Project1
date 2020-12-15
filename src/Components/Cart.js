import React,{useContext,useEffect,useState} from 'react'

import { DataContext} from './DataProvider'

export default function Cart(){
    
    const value =useContext(DataContext);
    const [cart,setCart]=value.cart;
    const [total, setTotal] = useState(0);
    console.log(cart);
    const decrease = (id) => {
        cart.forEach(item =>{
            if(item.id === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = (id) => {
        cart.forEach(item =>{
            if(item.id === id){
                item.count += 1 ;
            }
        })
        setCart([...cart])
    }
    const removeProduct=(id)=>{
        if(window.confirm("Bạn chắc chắn muốn xóa sản phẩm ?")){
                cart.forEach((item, index) => {
                    if(item.id === id){
                        cart.splice(index, 1)
                    }
                })
                setCart([...cart])
            }
    }
    useEffect(() =>{
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()
    },[cart])
         
        
    
    if (cart.length===0) return(
        <div className="container" style={{marginTop:'40px'}} >
            <div className="titleDetail" style={{textTransform:'uppercase',fontSize:'30px',marginBottom:'25px'}}>Thông tin giỏ hàng</div>
             <div>Giỏ hàng chưa có sản phẩm</div>
        </div> 
    )

    return(
        <div className="container Cart" style={{marginTop:'40px'}}>
            
            <div className="titleDetail" style={{textTransform:'uppercase',fontSize:'30px',marginBottom:'25px'}}>Thông tin giỏ hàng</div>
            {
                cart.map((product,index)=>(
                    <div className="detail row border" key={index} >
                        <div className="col-lg-2 col-md-12 col-sm-8" >
                            <img src={'.'+product.image} alt="watch" style={{minWidth:'150px',maxHeight:'150px'}}></img>
                        </div>

                        <div className="col-lg-4 col-md-12 " style={{textAlign:'left',lineHeight:'30px',margin:'auto 0',textAlign:'center'}}>
                            <div>Tên sản phẩm: {product.nameProduct}</div>
                            <div>Giá khuyến mãi: {product.price*(1-product.discount)}đ</div> 
                        </div>
                        
                        <div className="col-lg-3 amount" style={{margin:'auto 0'}}>
                            <div>Số lượng</div>
                            <button className="btn btn-success btn-sm border-radius" onClick={() => decrease(product.id)}>-</button>
                            <span className="amountProduct">{product.count}</span>
                            <button className="btn btn-success btn-sm " onClick={() => increase(product.id)}>+</button>
                        </div>
                        <div>

                        </div>
                        <div className="delete" style={{margin:'auto 0',color:'red'}} onClick={() => removeProduct(product.id) }>
                            <i className="fas fa-times"></i>
                        </div>

                    </div>
                )) 
            }
            <div className="total ">
                Tổng tiền:{total}
            </div>
            <button>Đặt hàng</button> 
        
        </div>
    )
}