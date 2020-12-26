import React from 'react'
import {Button, Form, FormText} from 'react-bootstrap'
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            numberPhone:'',
            isEmailValid:true,

            emailErr:"Gmail phải có @",
            isNumberValid:true,
            numberErr:'Số điện thoại phải có 10 số',
            password:'',
            isPasswordValid:true,
            passwordErr:'Mật khẩu phải có ít nhất 6 ký tự',
               
            passwordAgain:'',
            isPasswordAgainValid:true,
            passwordAgainErr:'Mật khẩu phải trùng nhau'
            
            
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.validateForm=this.validateForm.bind(this);
        
    }

 
    handleSubmit(event) {
        event.preventDefault();
    }

    validateForm(){
        if (this.state.numberPhone.length===10){
            this.setState({isNumberValid:true});
        }
        else this.setState({isNumberValid:false});
        

        if (this.state.password.length>=6){
            this.setState({isPasswordValid:true});
        }
        else this.setState({isPasswordValid:false});

        if (this.state.password!==this.state.passwordAgain){
            this.setState({isPasswordAgainValid:false});
        }
        else this.setState({isPasswordAgainValid:true});
    }

    changeInputValue(e){
        this.setState(
            {
                [e.target.name]: e.target.value,    
            }  
        );
    }
    render(){
        return(
           
                
                <div className=" container col-lg-6 col-md-8 col-sm-10">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label style={{fontSize:"35px",fontWeight:"bolder"}}>Đăng ký</Form.Label>

                        <Form.Row>
                            <Form.Control className="control col-5" type="text" placeholder="Họ" name='firstName' onChange={(e)=>this.changeInputValue(e)} required>
                            </Form.Control>
                            <div className="col-1"></div>
                            <Form.Control className="control col-6"type="text" placeholder="Tên" name='lastName' onChange={(e)=>this.changeInputValue(e)} required>
                            </Form.Control>
                        </Form.Row>

                        <Form.Row>
                            <Form.Control className="control" placeholder="Email" type="email" name='email' onChange={(e)=>this.changeInputValue(e)} required>
                            </Form.Control>
                            <FormText className="text-danger"></FormText>
                        </Form.Row>

                        <Form.Row>
                            <Form.Control  className="control"type="number" placeholder="Số điện thoại" name='numberPhone' onChange={(e)=>this.changeInputValue(e)} required>
                            </Form.Control>
                            <FormText className="text-danger">{!this.state.isNumberValid? this.state.numberErr:''}  </FormText>
                        </Form.Row>

                        <Form.Row>
                            <Form.Control className="control" type="password" placeholder="Mật khẩu" name="password" onChange={(e)=>this.changeInputValue(e)} required>
                            </Form.Control>
                            <FormText className="text-danger">{!this.state.isPasswordValid? this.state.passwordErr:''}  </FormText>
                        </Form.Row>

                        <Form.Row>
                            <Form.Control className="control" type="password" placeholder="Xác nhận lại mật khẩu" name="passwordAgain" onChange={(e)=>this.changeInputValue(e)} required>
                            </Form.Control>
                            <FormText className="text-danger">{!this.state.isPasswordAgainValid? this.state.passwordAgainErr:''}  </FormText>
                        </Form.Row>
                    
                        <Button style={{marginTop:'10px' }}block size="lg" type="submit" onClick={this.validateForm}>
                            Đăng ký
                        </Button>
                    </Form>
                </div>
                
            
            
        );
    }
}
export default Register;