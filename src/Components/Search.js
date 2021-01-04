import { event } from 'jquery';
import React, { useContext, useState } from 'react'
import {DataContext} from './DataProvider'
import { Link } from 'react-router-dom';
function Search(){
    const value=useContext(DataContext);
    const keyword=value.keyword;
    const [search,setSearch]=useState('');
    const [autoCombobox,setAutoComboBox]=useState([]);
    function onClickKeyWord(item){
        setSearch(item.target.innerText);
        console.log(search);
    }
    function show(e){
        let s=document.getElementById('combo');
        s.style.display='block';
        let dataSearch=e.target.value;
        let autoCombobox1=[];
        if (dataSearch.length!==0){
            autoCombobox1=keyword.filter((data)=>{
                return data.toUpperCase().includes(dataSearch.toUpperCase());
            })
            autoCombobox1=autoCombobox1.map((item,key)=>{
                return <li className="keyItem" key={key} onClick={(item)=>onClickKeyWord(item)}>{item}</li>
            })
            setAutoComboBox([...autoCombobox1]);
        }
        else setAutoComboBox([]);
        
    }
    function handleClickSearch(){
        let s=document.getElementById('combo');
        s.style.display='none';
    }

    return(
        <div className="container" style={{justifyItems:'left',fontSize:'12px'}}>
            <div className="container col-lg-8 col-md-8 col-sm-11 wrapperSearch" style={{marginBottom:'15px'}}>
                <input className="col-lg-12 col-md-12 col-sm-12 inputSearch" type="text" placeholder="Tìm kiếm" name="search"  value={search} onKeyUp={(e)=>show(e)} onChange={(e)=>setSearch(e.target.value)} ></input>
                <Link className="" to={'/search/'+search}><button className="searchBtn" onClick={handleClickSearch}><i className="fas fa-search"></i></button></Link>
                <div className="container col-lg-11 col-md-11 col-sm-11 autoCombo-box" id="combo">
                    {autoCombobox}
                </div>
            </div>
        </div>
    )
      
}
export default Search;