import React from 'react';

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


    resetSearch = (event) => {
        this.setState({ term: '' });
    }

    /*
     * How is 'this' determined inside an event handler?  
     * The answer is 'this' inside of an event handler always refers to the element it
     * was triggered on.
     */

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
                        <button className="ui primary basic button" type="submit">Submit</button>
                        <button className="ui secondary basic button" onClick={this.resetSearch}>Reset</button>
                    </div>
                </form>
            </div>
        );//return
    }//render
}//SearchBar





export default SearchBar;