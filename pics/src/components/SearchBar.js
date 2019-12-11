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

                        {/* Do not have {this.resetSearch()}, this will cause the function
                            to be ran automatically when the component renders.
                            Instead, have {this.resetSearch}, this will pass a reference to 
                            the function, not call the function. */}
                        <button onClick={this.resetSearch}>Reset</button>
                    </div>
                </form>
            </div>
        );//return
    }//render
}//SearchBar





export default SearchBar;