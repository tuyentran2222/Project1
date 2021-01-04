import React from 'react'

class NotFound extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div className="notfound">
               <div>
                    <i className="fas fa-exclamation-triangle"  style={{color:'red',fontSize:'100px'}}></i>
                    
                    <div> Không tìm thấy nội dung cần tìm.</div>
                   
               </div>
            </div>
        )
    }
        
}
export default NotFound;