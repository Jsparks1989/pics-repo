import React from 'react';
import './imageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    console.log('ImageList props: ');
    console.log(props.images);

    // BEST PRACTICE FOR MAPPING OVER LISTS
    // ====================================
    const list = props.images.map((image) => {
            return(
            // <img key={image.id} src={image.urls.regular}></img>
            <ImageCard key={image.id} image={image}/>
            );
        });


    return(
        <div className='image-list'>
            {list}
        </div>
    );
}





export default ImageList;