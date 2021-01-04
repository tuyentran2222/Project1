import React from 'react'
class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="container contact">
                <div className=" col-lg-12 titleDetail" style={{marginTop:'30px'}}>Liên hệ,góp ý qua mail</div>
                <div className=" row col-lg-12 wrapperContact" style={{fontSize:'14px',marginTop:'40px'}}>
                    <div className="col-lg-8 leftContact">
                        <div className="col-lg-12" > 
                            <input className="col-lg-6" id="email" name="email" type="email" placeholder="Email" style={{height:'40px',marginBottom:'25px'}}></input> 
                            <input className="col-lg-6" id="name" name="name" type="text" placeholder="Họ tên" style={{height:'40px'}}></input>
                        </div>
                        <div className="col-lg-12" style={{marginTop:'25px'}}>
                            <textarea className="col-lg-12" id="content" name="content" type="text" placeholder="Nội dung" style={{height:'240px'}}></textarea>
                        </div>    
                        <button className="btn btn-success " type="submit" style={{left:'0',width:'100px',marginBottom:'35px'}}>Gửi</button>     
                    </div>

                    <div className="col-lg-4 rightContact " style={{textAlign:'left'}}>
                        <div className="address">
                            <h6>CỬA HÀNG ĐỒNG HỒ</h6>
                            <i className="fas fa-map-marker-alt" style={{fontSize:'30px',color:'red'}}></i>
                            <span style={{padding:'auto 0'}}>Địa chỉ: Số 1,Giải phóng,Hai Bà Trưng,Hà Nội</span>

                        </div>
                        <div className="phoneContact">
                            <h6>LIÊN HỆ TRUNG TÂM TƯ VẤN KHÁCH HÀNG</h6>
                            <i className="fas fa-phone" style={{color:'firebrick',fontSize:'25px'}}></i>
                            <span>SĐT:0834925098</span>
                        </div>
                        <div className="emailContact">
                            <h6>LIÊN HỆ CÔNG VIỆC</h6>
                            <i className="far fa-envelope" style={{color:'blue',fontSize:'25px'}}></i>
                            <span className="navlink">Email: <a style={{textTransform:'lowercase'}} href="mailto:tuyen.tv184012@sis.hust.edu.vn" >tuyen.tv184012@sis.hust.edu.vn</a></span>
                        </div>
                    </div>
                    
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6763231528266!2d105.84126381505884!3d21.005607993943887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1609735295430!5m2!1svi!2s" style={{border:'0',width:'100%',height:'450px',frameBorder:"0"}}  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        )
    }

}
export default Contact;