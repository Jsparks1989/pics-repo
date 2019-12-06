import React from 'react';


/*
 * Creating functionality that will detect everytime a user enters
 * text in the search-bar.
 * 
 * When the user enters text in <input>, onInputChange(cb function) will 
 * capture the input and set it to state.inputSearch.
 * 
 * 
 * Refactored the code to go from 'uncontrolled' to 'controlled'.
 * As the user types in <input>, the callback for onChange is invoked.
 * The callback uses setState to set state.inputSearch to the value entered by the user.
 * The Component rerenders.
 * The <input> 'value' is set the state.inputSearch.
 * 
 */


class SearchBar extends React.Component {

    // State
    state = {inputSearch: ''};

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search Images</label>
                        <input type="text" 
                            value={ this.state.inputSearch } 
                            onChange={(event) => this.setState({ inputSearch: event.target.value })}>
                        </input>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );//return
    }//render
}//SearchBar





export default SearchBar;