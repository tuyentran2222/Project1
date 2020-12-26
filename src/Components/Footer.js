import React from 'react'
import {NavLink} from 'react-router-dom'
class Footer extends React.Component{
    render(){
        return(
            <div className="jumbotron jumbotron-fluid" style={{marginTop:"40px"}}>
                    <div className="container" style={{textAlign:"left"}}>
                        <div className="row">
                            <div className="col-sm-3 ">
                                <div className="list-group group"  >
                                    <h5>ĐIỀU HƯỚNG</h5>
                                    <NavLink className="navlink" to="/introduction" activeClassName="selected">Giới thiệu</NavLink>
                                    <NavLink className="navlink" to="/manWatch" activeClassName="selected">Đồng hồ nam</NavLink>
                                    <NavLink className="navlink" to="/womenwatch" activeClassName="selected">Đồng hồ nữ</NavLink>
                                    <NavLink className="navlink" to="/doublewatch" activeClassName="selected">Đồng hồ đôi</NavLink>
                                    <NavLink className="navlink" to="/blog" activeClassName="selected">Tin tức</NavLink>
                                </div>
                            
                            </div>
                            <div className="col-sm-4">
                                <div className="list-group group">
                                    <h5>VẤN ĐỀ GẶP PHẢI</h5>
                                    <NavLink className="navlink" to="/a" activeClassName="selected">Quên mật khẩu?</NavLink>
                                    <NavLink className="navlink" to="/a" activeClassName="selected">Cách tạo một tài khoản mới</NavLink>
                                    <NavLink className="navlink" to="/a" activeClassName="selected">Điều khoản</NavLink>
                                    <NavLink className="navlink" to="/a" activeClassName="selected">Cam kết</NavLink>
                                    <NavLink className="navlink" to="/a" activeClassName="selected">Chính sách hoàn trả</NavLink>
                                </div>
                            
                            </div>
                            <div className="col-sm-5">
                                <div className="list-group group">
                                    <h5>THÔNG TIN LIÊN HỆ</h5>
                                    <p className="navlink">ĐỊA CHỈ:SỐ 256,GIẢI PHÓNG,HAI BÀ TRƯNG,HÀ NỘI. </p>
                                    <p className="navlink">SỐ ĐIỆN THOẠI:0834925098</p>
                                    
                                    <p className="navlink">EMAIL: <a style={{fontSize:"13px",textTransform:'lowercase'}} href="mailto:tuyen.tv184012@sis.hust.edu.vn" >tuyen.tv184012@sis.hust.edu.vn</a></p>
                                </div>
                            
                            </div>
                        </div>
                        
                    </div>

        
            </div>
            
        )
    }   
    
};
export default Footer;
