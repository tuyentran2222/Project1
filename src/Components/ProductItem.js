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
            <div className="card item card col-lg-3  col-md-4 col-sm-5" key={this.props.item.id}style={{width: "100%",border:'1px solid black',marginLeft:'2.5%',display:'inline-block' ,marginTop:'40px',boxShadow:'1px 1px 4px 1px black'}}>
                <Link to={this.state.link+this.props.item.id}>
                    <Image className="col-lg-12" src={'.'+this.props.item.image} alt="Card image" />
                </Link>
                <div className="card-body col-lg-12" style={{borderTop:'1px solid black'}}> 
                    <p className="card-title col-lg-12" style={{fontSize:'14px'}}>{this.props.item.nameProduct}</p>
                    <div className="row" style={{fontSize:'13px'}}>
                        <div className="col-lg-6 col-sm-12">{this.props.item.price*(1-this.props.item.discount)}</div>
                        <div className="col-lg-6 col-sm-12"><b style={{textDecoration:'line-through'}}>{this.props.item.price}</b></div>
   
                    </div>        
                    <Link to={this.state.link+this.props.item.id}>
                        <button className="btn btn-danger col-lg-12" >Xem chi tiết</button>  
                    </Link>
                    <Link>
                        <button className="btn btn-success col-lg-12" onClick={()=>this.props.addCart(this.props.item.id)} ><i className="fas fa-cart-plus"></i></button>
                    </Link>
                </div>
            </div>        
        );
    }
}
export default ProductItem;
