import React from 'react';


/*
 * Creating functionality that will detect everytime a user enters
 * text in the search-bar.
 * 
 * When the user enters text in <input>, onInputChange(cb function) will 
 * capture the input and set it to state.inputSearch.
 * 
 * 
 * 
 * 
 * 
 */


class SearchBar extends React.Component {

    // State
    state = {inputSearch: ''};

    // Callback function - onChange
    onInputChange(event){
        console.log(event.target.value);
        // Will set the <input> text to state.inputSearch
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search Images</label>
                        {/* Do not add () onto this.onInputChange. If () is added,
                            onInputChange will be automatically called everytime the component is rendered.
                            We dont want it called everytime the page is rendered, only at certain times.
                            By leaving () off, we are passing a reference to onInputChange to <input>. so 
                            that <input> can call the function at sometime in the future. 
                            NEVER ADD () TO A CALLBACK FUNCTION IN AN EVENT HANDLER
                            =======================================================  
                        */}
                        <input type="text" onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        );//return
    }//render
}//SearchBar





export default SearchBar;