import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0728ec1aafa1cad5807f767267288d5ece7b6b4cb11454283bc5a2dc983785b4'
    }

});