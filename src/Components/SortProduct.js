import React from 'react'
import ProductItem from './ProductItem'
class SortProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            SortProducts:this.props.searchP
        }
        this.onChangePrice=this.onChangePrice.bind(this);
        this.onChangePriceLevel=this.onChangePriceLevel.bind(this);
    }
    onChangePriceLevel(event){
        const val=event.target.value;
        let sProduct=[...this.props.searchP];
        if (val==='0'){
            sProduct.sort(function(a, b){
                return a.price-b.price;
            });
            this.setState({SortProducts:[...sProduct]});
        }
        else {
            sProduct.sort(function(a, b){
                return b.price-a.price;
            });
            this.setState({SortProducts:[...sProduct]});
        }
    }
    onChangePrice(event){
        const val=event.target.value;
        let sProduct=[...this.props.searchP];
        let ssProduct;
        if (val==='0'){
            ssProduct=sProduct.filter(function(a){
                return a.price<1000000;
            });
            this.setState({SortProducts:[...ssProduct]});
        }
         if(val==='1') {
            ssProduct=sProduct.filter(function(a){
                return a.price>=1000000 && a.price<=3000000;
            });
            this.setState({SortProducts:[...ssProduct]});
        }
        if(val==='2') {
            ssProduct=sProduct.filter(function(a){
                return a.price>=3000000;
            });
            this.setState({SortProducts:[...ssProduct]});
        }
        if(val==='3') {
            this.setState({SortProducts:[...sProduct]});
        }
    }



    render(){
        return (
            <>
                <div className="row sortProduct">
                    <div className="col-lg-6">
                        <div>sắp xếp theo giá</div>
                        <select id="price" onChange={this.onChangePriceLevel}>
                            <option value={0}>Sắp xếp theo giá tiền tăng dần</option>
                            <option value={1}>Sắp xếp theo giá tiền giảm dần</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <div>Giá tiền</div>
                        <select onChange={this.onChangePrice}>
                            <option value={3}>Tất cả</option>
                            <option value={0}>Dưới 1 triệu</option>
                            <option value={1}>Từ 1 đến 3 triệu</option>
                            <option value={2}>Trên 3 triệu</option>
                        </select>
                    </div>
                </div>
                <div className="title" style={{textTransform:'uppercase',fontSize:'30px'}}>Kết quả tìm kiếm</div>
                {  
                    this.state.SortProducts.map((product,index)=>( <ProductItem item={product} addCart={this.props.addCart} />))
                } 

            </>  
    )
    }
    
}
export default SortProduct;