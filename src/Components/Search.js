import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from './DataProvider';

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
            <div className="Search container " style={{marginBottom:'20px'}}>
                <div className="row">
                    <div className="col-lg-2 col-md-1"></div>
                    <input className="search col-lg-6 col-md-8 col-sm-9" type="text" placeholder="Tìm kiếm" name="search"  value={this.state.search} onChange={(e)=>this.setSearch(e)}></input>
                    <Link className="col-lg-2 col-md-3 col-sm-3" to={this.state.link+this.state.search}><button className="searchBtn btn btn-primary " >Tìm kiếm</button></Link>
                    {console.log(this.state.search)}
                </div>
            </div>
        )
    }
        
}

export default Search;