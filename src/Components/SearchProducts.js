import React, { useContext } from 'react'
import {useParams} from 'react-router';
import {DataContext} from './DataProvider'
import SortProduct from './SortProduct'
export default function SearchProducts(){
    const value= useContext(DataContext);
    const [products]=value.products;
    const {find}=useParams();
    const addCart =value.addCart;
    const searchProducts= products.filter(
        (product)=> (product.description.toUpperCase().includes(find.toUpperCase())||product.trademark.toUpperCase().includes(find.toUpperCase()))
    );  
    //console.log(searchProducts);
    return (
        <div>
            <div className="container" style={{marginTop:"40px"}}>
                <SortProduct searchP={searchProducts} addCart={addCart}/> 
            </div>
        </div>
    )
}