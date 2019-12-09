import React from 'react';


/*
 * 
 * When a user submits the form, onFormSubmit will run. onFormSubmit takes the event
 * as a param and prevents the default behavior that would cause the page to refesh 
 * itself, and we look at the props object and we call the function that was passed 
 * in props as onSubmit. We invoke the function with this.state.term.
 * 
 * The point of this is so we can get data from child comp (SearchBar) back to parent
 * comp (App). Whatever user searches for in SearchBar is not just available in SearchBar,
 * it is available in App as well. 
 * 
 */


class SearchBar extends React.Component {

    // State
    state = {term: ''};
    
    // Going with second solution.
    onFormSubmit = (event) => {
        event.preventDefault();
        // When form is submitted, onFormSubmit will run the callback props.onSubmit
        // that was passed to SearchBar from App component.
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Images</label>
                        <input type="text" 
                            value={ this.state.term } 
                            onChange={(event) => this.setState({term: event.target.value})}>
                        </input>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );//return
    }//render
}//SearchBar





export default SearchBar;