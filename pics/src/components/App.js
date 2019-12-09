import React from 'react';
import SearchBar from './SearchBar';
//import ImageList from './ImageList';





// Class component
class App extends React.Component {

    onSearchSubmit  = (term) => {
        console.log('App Component onSearchSubmit: ');
        console.log(term);
    }

    render(){
        return(
            <div className="ui container" style={{ marginTop: '15px' }}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
        );
    }
}



export default App;