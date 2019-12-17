import React from 'react';
import './imageList.css';
import ImageCard from './ImageCard';


/**
 * Functional Components are just functions, so they have no 'this'.  
 * To understand React components, you'll need to understand JS classes first.
 * The 'this' keyword, essentially, is a reference to an object that is assigned
 *  based on how the function is called (execution context).
 */


const ImageList = (props) => {

    // console.log('ImageList props: ');
    // console.log(props.images);

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