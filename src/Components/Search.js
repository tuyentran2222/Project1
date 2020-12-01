import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from './DataProvider';

function Search(){
    const value=useContext(DataContext);
    const [search,setSearch]=value.search;
    const [searchInfo,setSearchInfo]=useState("")
    
        return(
            <div className="Search container " style={{marginBottom:'20px'}}>
                <div className="row">
                    <div className="col-lg-2 col-md-1"></div>
                    <input className="search col-lg-6 col-md-8 col-sm-9" type="text" placeholder="Tìm kiếm" name="search"  value={searchInfo} onChange={(e)=>setSearchInfo(e.target.value)}></input>
                    <Link to='/search'><button className="searchBtn btn btn-primary col-lg-2 col-md-2 col-sm-3" onClick={setSearch(searchInfo)}>Tìm kiếm</button></Link>
                    {console.log(search)}
                </div>
            </div>
        )
}

export default Search;