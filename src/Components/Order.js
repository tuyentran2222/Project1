import React from 'react'
class Order extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataProvince:[],
            dataDistrict:[],
            dataCommune:[]
        }
    }
    async componentDidMount() {
        try {
            const res = await fetch('https://cors-anywhere.herokuapp.com/https://thongtindoanhnghiep.co/api/city');
            const data = await res.json();
            const data1=(data.LtsItem).map((province,key)=>{
                    return <option key={key+1}>{province.Title}</option>
            });
            this.setState({dataProvince:data1});
            
        } catch(e) {
            console.error(e);
        }
    }
    onSelectedProvince=(e)=>{
        try{
            console.log(e.target.innerText.selected);
            console.log(this.state.dataProvince);
            let data3=this.state.dataProvince.filter((province)=>{
                return e.target.innerText===province.Title;
            })
            console.log(data3);
            
            fetch('https://cors-anywhere.herokuapp.com/https://thongtindoanhnghiep.co/api/city/18/district')
                .then(res => res.json())
                    .then(json => this.setState({ dataDistrict: json }));
    
        } catch(e) {
            console.error(e);
        }
        
    }
    render(){
        return (
            <div>
                <select className="province" name="province"  onChange={(e)=>this.onSelectedProvince(e)}>
                    {this.state.dataProvince} 
                </select>
                <select className="district" name="district">
                    {console.log(this.state.dataDistrict)}
                </select>
                <select className="xa" name="xa">

                </select>

            </div>
        )
    }
}
export default Order;