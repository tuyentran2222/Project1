import React from 'react'
import {useContext} from 'react'
import {DataContext} from './DataProvider'
function SortProduct(){
    const value =useContext(DataContext);
    return (
        <div className="row sortProduct">
            <div className="col-lg-6">
                <div>sắp xếp theo giá</div>
                <select>
                    <option value={0}>Sắp xếp theo giá tiền tăng dần</option>
                    <option value={1}>Sắp xếp theo giá tiền giảm dần</option>
                </select>
            </div>
            <div className="col-lg-6">
                <div>Giá tiền</div>
                <select >
                    <option value={0}>Dưới 1 triệu</option>
                    <option value={1}>Từ 1 đến 3 triệu</option>
                    <option value={2}>Trên 3 triệu</option>
                </select>
            </div>
        </div>
    )
}
export default SortProduct;