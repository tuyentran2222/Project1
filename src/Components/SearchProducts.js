import React, { useContext } from 'react'
import {DataContext} from './DataProvider'
export default function SearchProducts(){
    const value= useContext(DataContext)
    const [search,setSearch]=value.search;
    const products=value.products;
    
    console.log();
    return (
        <div>
            Search  Component
        </div>

    )
}