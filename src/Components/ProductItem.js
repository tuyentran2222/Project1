import React from 'react'
import { Link } from 'react-router-dom';
import {Image} from 'react-bootstrap'
class ProductItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            link:"/product/"
        }
    }
    render(){ 
        return(  
            <div className="card card-item item" id="item" key={this.props.item.id}>
                <Link to={this.state.link+this.props.item.id}>
                    <Image className="col-lg-12 img" src={'.'+this.props.item.image} alt="Card image" />
                </Link>
                <div className="card-body col-lg-12" style={{borderTop:'1px solid black'}}> 
                    <p className="card-title " style={{fontSize:'12px'}}>{this.props.item.nameProduct}</p>
                    <div className="row" style={{fontSize:'12px'}}>
                        <div className="col-lg-6 col-sm-12">{this.props.item.price*(1-this.props.item.discount)}</div>
                        <div className="col-lg-6 col-sm-12"><b style={{textDecoration:'line-through'}}>{this.props.item.price}</b></div>
                    </div>
                    <a>
                        <Link to={this.state.link+this.props.item.id} href="#header">
                            <button className="btn btn-danger col-lg-12"style={{fontSize:'12px'}} >Xem chi tiết</button>  
                        </Link>
                    </a>        
                    
                    
                        <button className="btn btn-success col-lg-12 txt" onClick={()=>this.props.addCart(this.props.item.id)} ><i className="fas fa-cart-plus" style={{fontSize:'12px'}}></i></button>
                    
                </div>
                <div className="discountLabel">
                    {this.props.item.discount*100}%
                </div>
            </div>        
        );
    }
}
export default ProductItem;
