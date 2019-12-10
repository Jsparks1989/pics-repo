import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// Class component
class App extends React.Component {

    onSearchSubmit  = async (term) => {
        // Want to make API request to unsplash when this function is invoked. 
        // Must use GET request with an endpoint of /search/photos.
        // Takes 2 params. First: the address to make GET request to. 
        // Two: object that can customize request.
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 0728ec1aafa1cad5807f767267288d5ece7b6b4cb11454283bc5a2dc983785b4'
            }
        });

        console.log(response.data.results);
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