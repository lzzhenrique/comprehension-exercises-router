import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class StrictAcess extends Component {
    
   
    verifyUser = () => {
        const { user } = this.props
        const { username, password } = user

        if (username === 'joao' && password === '1234') {
            return(
                <h1>Welcome joao!</h1>
            )
        } 
        
        alert('Acess denied')
        return(
            <Redirect to='/'/>
        )
    }
  render() {
    return (
        <div>
        {this.verifyUser()}
        </div>
    );
  }
}

export default StrictAcess;
