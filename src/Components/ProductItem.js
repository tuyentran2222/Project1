import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {DataContext} from './DataProvider'
class ProductItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            link:"/product/"
        }
    }
    
    
    render(){ 
        return(
            <div className="card col-lg-3  col-md-4 col-sm-5" style={{width: '100%',border:'1px solid black',marginLeft:'2.5%',display:'inline-block' ,marginTop:'40px',boxShadow:'1px 1px 4px 1px black'}}>
               <div className="card item" key={this.props.item.id}>
                        <Link to={this.state.link+this.props.item.id}>
                            <img className="card-img-top col-lg-12" src={this.props.item.image} alt="Card image" />
                        </Link>
                        <div className="card-body" style={{borderTop:'1px solid black'}}> 
                            <p className="card-title col-lg-12" style={{fontSize:'14px'}}>{this.props.item.nameProduct}</p>
                            <div className="row" style={{fontSize:'13px'}}>
                                <div className="col-lg-6 col-sm-12">{this.props.item.price*(1-this.props.item.discount)}</div>
                                <div className="col-lg-6 col-sm-12"><b style={{textDecoration:'line-through'}}>{this.props.item.price}</b></div>
                                
                            </div>
                            
                            <Link to={this.state.link+this.props.item.id}>
                                <button className="btn btn-danger col-lg-12" >Xem chi tiết</button>  
                            </Link>
                            <Link>
                                <button className="btn btn-success col-lg-12" onClick={()=>this.props.addCart(this.props.item.id)} ><i class="fas fa-cart-plus"></i></button>
                            </Link>
                        </div>
                     </div>

             </div>

        );
    }
}

export default ProductItem;
