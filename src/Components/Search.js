import React from 'react'
import { Link } from 'react-router-dom';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            link:'/search/',
            search:'',
        }  
    }
    setSearch=(e)=>{
        this.setState({"search":e.target.value});
    }
    render(){
        return(
           
                <div className="container col-lg-6 col-md-8 col-sm-11" style={{marginBottom:'15px'}}>
                    <input className="col-lg-9 col-md-8 col-sm-8" type="text" placeholder="Tìm kiếm" name="search"  value={this.state.search} style={{height:'40px',marginBottom:'5px'}} onChange={(e)=>this.setSearch(e)} ></input>
                    <Link className="col-lg-3 col-md-4 col-sm-2" to={this.state.link+this.state.search}><button className="searchBtn btn btn-primary" >Tìm kiếm</button></Link>
                </div>
           
        )
    }      
}

export default Search;