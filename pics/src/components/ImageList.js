import React from 'react';
import './imageList.css';

const ImageList = (props) => {

    // BEST PRACTICE FOR MAPPING OVER LISTS
    // ====================================
    const list = props.images.map((image) => {
            return(
            <img key={image.id} src={image.urls.regular}></img>
            );
        });


    return(
        <div className='image-list'>
            {list}
        </div>
    );
}





export default ImageList;