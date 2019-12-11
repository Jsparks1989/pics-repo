import React from 'react';


const ImageList = (props) => {

    const list = props.images.map((image) => {
            return(
            <img src={image.urls.regular}></img>
            );
        });

    return(
        <div>
            {list}
        </div>
    );
}





export default ImageList;