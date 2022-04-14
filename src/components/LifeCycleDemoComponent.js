import React, { useState} from "react"

class SuccessComponent extends React.Component {
    componentWillMount() {
        alert("Success Component will Mount")
    }
    componentDidMount() {
        alert("Success Component mounted")
    }
    componentWillUnmount() {
        alert("Success Component will unmount")
    }
    render() {
        return (
            <>
            <h2>Login Success</h2>
            <p>Happy</p>
            
            </>
        )
    }
}

class ErrorComponent extends React.Component {
    componentWillMount() {
        alert("Error Component will Mount")
    }
    componentDidMount() {
        alert("Error Component mounted")
    }
    componentWillUnmount() {
        alert("Error Component will unmount")
    }
    render() {
        return (
            <>
            <h2>Login Fail...</h2>
            
            </>
        )
    }
}

 class LifeCycleDemoComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userDetails:{
                UserName:"John",
                Password:"12John"
            },
            formDetails:{
                UserName:"",
                Password:"",
            },
            msg:"",
            products:[]
        }
    }


    
    handleUserName(event){
         this.setState({
             formDetails:{
                 UserName:event.target.value,
                 Password:this.state.formDetails.Password
             }
         })
    }

    handlePaswoord(event){
        this.setState({
            formDetails:{
                UserName:this.state.formDetails.UserName,
                Password:event.target.value
            }
        })
   }
   HandleLoginClick(event) {
       if(this.state.userDetails.UserName ===this.state.formDetails.UserName && this.state.userDetails.Password=== this.state.formDetails.Password ){
        this.setState({
            msg:<SuccessComponent></SuccessComponent>
        })
       }else{
            this.setState({
                msg:<ErrorComponent></ErrorComponent>
            })


    }
    
   }
//    handleLifeName(event){
//     this.setState({
//         formDetails:{
//             UserName:event.target.value,
//             Password:this.state.formDetails.Password
//         }
//     })
// }
   componentWillMount(){
       this.setState({
           msg:"Provide Credentails"

       })
       fetch("http://fakestoreapi.com/products").then(res => res.json()).then(data=>{
           this.setState({
               products:data
           })
       })
   }
    render() {
        return (
            <div className="container-fluid">
                <h2>User login</h2>
                <dl>
                    <dt>User name</dt>
                    <dd><input type="text" onChange ={this.handleUserName.bind(this)}></input></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange ={this.handlePaswoord.bind(this)}/></dd>
                </dl>
                <button onClick={this.HandleLoginClick.bind(this)}>Login</button>
                <hr/>
                <div>
                    {this.state.msg}
                </div>
                <div>
                    <ol>
                    {
                    this.state.products.map(product=>
                        <li>${product.title}</li>
                        ) 

                    
                    }
                    </ol>
                </div>
              
            </div>
        )
    }
}



export default LifeCycleDemoComponent
