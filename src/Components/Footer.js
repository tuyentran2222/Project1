import React from 'react'
import {NavLink} from 'react-router-dom'
class Footer extends React.Component{

    render(){
        return(
            <div className="jumbotron jumbotron-fluid" style={{marginTop:"40px"}}>
                <div className="container " style={{ paddingTop:"0px"}}>
                    <div className="container" style={{textAlign:"left"}}>
                        <div class="row">
                            <div className="col-sm-3 " >
                                <div className="list-group" style={{fontSize:"13px"}} >
                                    <h5>Điều hướng</h5>
                                    <NavLink  className="navlink" to="/introduction" activeClassName="selected">Giới thiệu</NavLink>
                                    <NavLink  className="navlink"to="/manwacth" activeClassName="selected">Đồng hồ nam</NavLink>
                                    <NavLink  className="navlink"to="/womenwatch" activeClassName="selected">Đồng hồ nữ</NavLink>
                                    <NavLink  className="navlink"to="/doublewatch" activeClassName="selected">Đồng hồ đôi</NavLink>
                                    <NavLink className="navlink" to="/blog" activeClassName="selected">Tin tức</NavLink>
                                </div>
                            
                            </div>
                            <div className="col-sm-4"style={{}} >
                                <div className="list-group" style={{fontSize:"13px"}}  >
                                    <h5>Vấn đề gặp phải</h5>
                                    <NavLink className="navlink" to="/a" activeClassName="selected">Quên mật khẩu?</NavLink>
                                    <NavLink className="navlink" to="/" activeClassName="selected">Cách tạo một tài khoản mới</NavLink>
                                    <NavLink className="navlink" to="/" activeClassName="selected">Điều khoản</NavLink>
                                    <NavLink className="navlink" to="/" activeClassName="selected">Cam kết</NavLink>
                                    <NavLink className="navlink" to="/login" activeClassName="selected">Chính sách hoàn trả</NavLink>
                                </div>
                            
                            </div>
                            <div className="col-sm-5" style={{fontSize:"13px"}}>
                                <div className="list-group">
                                    <h5>Thông tin liên hệ</h5>
                                    <p>Địa chỉ:số 1,Giải Phóng,Hai Bà Trưng ,Hà Nội</p>
                                    <p>Số điện thoại:0834925098</p>
                                    
                                    <p >Email: <a style={{fontSize:"13px",textTransform:'lowercase'}} href="mailto:tuyen.tv184012@sis.hust.edu.vn" >tuyen.tv184012@sis.hust.edu.vn</a></p>
                                </div>
                            
                            </div>
                        </div>
                        
                    </div>

        </div>
            </div>
            
        )
    }   
    
};
export default Footer;
