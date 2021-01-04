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
                                    <NavLink className="navlink" to="/notfound" activeClassName="selected">Quên mật khẩu?</NavLink>
                                    <NavLink className="navlink" to="/notfound" activeClassName="selected">Cách tạo một tài khoản mới</NavLink>
                                    <NavLink className="navlink" to="/notfound" activeClassName="selected">Điều khoản</NavLink>
                                    <NavLink className="navlink" to="/notfound" activeClassName="selected">Cam kết</NavLink>
                                    <NavLink className="navlink" to="/notfound" activeClassName="selected">Chính sách hoàn trả</NavLink>
                                </div>
                            
                            </div>
                            <div className="col-sm-5">
                                <div className="list-group group">
                                    <h5>THÔNG TIN LIÊN HỆ</h5>
                                    <p className="navlink">Địa chỉ: Số 1,Giải Phóng,Hai Bà Trưng,Hà Nội</p>
                                    <p className="navlink">Số điện thoại:0834925098</p>
                                    
                                    <p className="navlink">Email: <a style={{fontSize:"13px",textTransform:'none'}} href="mailto:tuyen.tv184012@sis.hust.edu.vn" >tuyen.tv184012@sis.hust.edu.vn</a></p>
                                </div>
                            
                            </div>
                        </div>
                        
                    </div>

        
            </div>
            
        )
    }   
    
};
export default Footer;
