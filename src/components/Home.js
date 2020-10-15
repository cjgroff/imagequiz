import React from 'react';
import Imagesquiz from './Imagesquiz';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
        /*
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
        */
       let username = '';
        const location = this.props.location;
        if (location) {
            console.log(location);
            if (location.state) {
                if (location.state.user) {
                    username = location.state.user;
                }
            }
        }

        return (
            <div>
                <div className="loginButton">
                    {username.length > 0 ? username
                        : <Link to='/login'>Login</Link>}
                </div>
                <div>
                    {username.length == 0 ?  "Please Login"
                        :< Imagesquiz />}
                </div>
            </div>
        )
    }
}


export default Home;
