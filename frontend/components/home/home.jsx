import React from 'react';

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
        
        }
    }

     

    render(){
        debugger
    return (  
    <div className="user-home">
        <h2>{this.props.currentUser.first_name}</h2>
        <h2>Lets Forage!</h2>
    </div>)

    }
}

export default Home;