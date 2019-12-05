import React from 'react';




class SearchBar extends React.Component {
    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search Images</label>
                        <input type="text"></input>
                    </div>
                </form>
            </div>
        );//return
    }//render
}//SearchBar





export default SearchBar;