import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

// Class component
class App extends React.Component {

    // Setting the state after the async API request.
    state = { images: [] };

    /*
     * response: 
     * - config obj
     * - data obj
     *   - results []
     *   - total int
     *   - total_pages int
     */


    onSearchSubmit  = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
    
        this.setState({ images: response.data.results });
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
                    <p>we found {this.state.images.length} images from your search!</p>
                </div>
            );
        }
    }

    render(){
        return(
            <div className="ui container" style={{ marginTop: '15px' }}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            {this.displaySearch()}
            <ImageList images={this.state.images} />
        </div>
        );
    }
}



export default App;