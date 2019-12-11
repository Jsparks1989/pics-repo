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

    //-- For some reason, this syntax does not work. --//
    // const list = () => {
    //     props.images.map((image) => {
    //         return(
    //             <img src={image.urls.regular}></img>
    //         );
    //     });
    // }


    // NOT BEST PRACTICE FOR MAPPING OVER LISTS
    // ========================================
    //-- Working version of the above syntax commented out. --//
    // const list = () => {
    //     return props.images.map((image) => {
    //         return(
    //             <img src={image.urls.regular}></img>
    //         );
    //     });
    // }
    // 
    // return <div>{list()}</div>


    return(
        <div className='image-list'>
            {list}
        </div>
    );
}





export default ImageList;