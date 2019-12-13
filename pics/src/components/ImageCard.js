// Purpose of this Component is to show one image by itself.

import React from 'react';



class ImageCard extends React.Component {
    render() {
        console.log('ImageCard props: ');
        console.log(this.props.image);
        return(
            <div>
                {/* <img 
                alt={this.props.image.description}
                src={this.props.image.urls.regular}>

                </img> */}
                ImageCard


            </div>
        );
    }
}


export default ImageCard;