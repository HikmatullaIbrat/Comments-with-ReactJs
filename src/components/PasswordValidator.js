import React from "react";

class PasswordValidator extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {password: ''};
        // this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    // onPasswordChange(event){// comment this method if you want to arrow function work directly and also bing(this) line as well
    //     // console.log(event.target.value)

    //     // change state and assign value of typed with keyboard
    //     this.setState({ password: event.target.value});           

    // }
    render(){
        return (
            <div className="ui segment">
            <form className="ui form">
               <div className="field">
                    <label>Enter Password</label>
                    <input 
                    type="password" 
                    value={this.state.password}
                    // onChange={this.onPasswordChange}
                    onChange={e=>this.setState({password:e.target.value})}

                    />

               </div>
               {this.state.password.length<4 ? 'Password must be at least 4 characters': ''}
            </form>

            </div>

        );
    }
}

export default PasswordValidator;