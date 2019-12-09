import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';





// Class component
class App extends React.Component {
    render(){
        return(
            <div className="ui container" style={{ marginTop: '15px' }}>
            <SearchBar />
        </div>
        );
    }
}



export default App;