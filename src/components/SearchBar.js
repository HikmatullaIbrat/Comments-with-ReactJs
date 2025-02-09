import React from "react";

class Searchbar extends React.Component{
    state = { term: '' };
    // onInputChange(event){

    //     console.log(event.target.value)

    // }
    preventFromAutomaticSearchbyEnterKey(event){
        event.preventDefault();

    }
    onFormSubmit=event => { 
        event.preventDefault();
         this.props.onSubmit(this.state.term);
        }
    // state = { term: '' }; 
    // onInputChange = (event) => { this.setState({ term: event.target.value }); };
    // onFormSubmit = (event) => { event.preventDefault(); this.props.onSubmit(this.state.term); };

    render(){
        return (
            <div className="ui segment" onSubmit={this.onFormSubmit}>
            <form className="ui form" >
               <div className="field">
                <label>Image Search</label>

                {/* we have three popular eventhandler props: onChange, onSubmit, onClick  */}
                {/* if we write this.onInputChange() means that function will be called automatically when render() 
                is called */}
                {/* And if we write this.onInputChange: means we are passing a reference to this function
                so that input can call the function at some point of time in future not automatically */}
                {/* <input type="text"
                value={this.state.term}
                // onChange={(event) => this.onInputChange(event)}
                /> */}

                {/* using of arrow function with onChange prop */}
                {/* <input type="text" onChange={(event) => console.log(event.target.   value)} /> */}
                <input type="text" onChange={e=>this.setState({term:e.target.value})} />


                
               </div>
            </form>

            </div>

        );
    }
}

export default Searchbar;