import React from 'react';
import Images from './Images';


class Home extends React.Component{
    constructor(props){
        super(props)
        //console.log("Home ctor,props",props)
        this.state = {showLoginForm: true}
    

    }
    
    login = ()=>{
        this.setState({showLoginForm: false}) 
    }
    render(){
        if (this.state.showLoginForm){
            return (
                <div>
                    Login Page
                    <br/>
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>
                    <br/>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                    <br/>
                    <button type="submit" onClick={this.login}  >Login</button>
                </div>
            )
        }
        else{
            return(
                <div>
                    <Images />
                </div>
            )
        }

    }
}


export default Home;
