import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

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
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
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