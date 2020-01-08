import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
         return this.state.isLoggedIn && <div>Welcome Chandana</div>
        // return(
        //     this.state.isLoggedIn?
        //     <div>Welcome Chandana</div> :
        //     <div>Welcome Guest</div>
        // ) ternary conditional operator

        // let message
        // if(this.state.isLoggedIn)
        // {
        //      message= <div>Welcome Chandana</div>
        // }
        // else
        // { 
        //     message= <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>  element variable approach
        
        
        // if(this.state.isLoggedIn)
        // {
        //     return (
        //         <div>
        //             <div>Welcome Chandana</div>
        //          </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //            <div>Welcome Guest</div>
        //         </div>
        //     )
        // }   if/else approach
       
    }
}

export default UserGreeting
