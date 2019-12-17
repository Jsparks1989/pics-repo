import React from 'react';

class ImageCard extends React.Component {
    render() {
        // Destructuring image object. Adding 'description' and 'urls'
        // to the end of 'this.props.image'.
        const {description, urls} = this.props.image;

        // console.log('ImageCard props: ');
        // console.log(this.props.image);
        return(
            <div>
                <img 
                alt={description}
                src={urls.regular}>
                </img>
            </div>
        );
    }
}


export default ImageCard;