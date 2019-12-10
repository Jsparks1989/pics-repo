import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// Class component
class App extends React.Component {

    // Setting the state after the async API request.
    state = { images: [], imagesTotal: {} };

    /*
     * response: 
     * - config obj
     * - data obj
     *   - results []
     *   - total int
     *   - total_pages int
     */


    onSearchSubmit  = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 0728ec1aafa1cad5807f767267288d5ece7b6b4cb11454283bc5a2dc983785b4'
            }
        });

        this.setState({ images: response.data.results, imagesTotal: response.data.total });

        console.log('state imagesData: ');
        console.log(response);
    }


    displaySearch = () => {
        if(this.state.images.length === 0){
            return(
                <div className="ui message">
                    <div className="header">
                        Your Search
                    </div>
                    <p>There is are no results for your search... try another search.</p>
                </div>
            );
        } else {
            return(
                <div className="ui message">
                    <div className="header">
                        Your Search
                    </div>
                    <p>we found {this.state.imagesTotal} images from your search!</p>
                </div>
            );
        }
    }



    render(){
        return(
            <div className="ui container" style={{ marginTop: '15px' }}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            {this.displaySearch()}
        </div>
        );
    }
}



export default App;