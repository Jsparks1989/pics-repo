import React from 'react';

class ImageCard extends React.Component {
    /*
     * Creating a Ref in the constructor. Ref gives us access to a single DOM element.
     * Using Ref to get the height and width of each individual image, so we can customize
     * each images space to show in CSS.
     */
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.imageRef.current);

        /*
         * Console.logging 0 for clientHeight because we are console logging  
         * the height before the image has even had a change to load. So the image 
         * tag has a height of 0 pixels. Getting the height of image from the componentDidMount()
         * is way too early. Must get image height from somewhere else.
         */
        console.log(this.imageRef.current.clientHeight);
    }

    render() {
        // Destructuring image object.
        const {description, urls} = this.props.image;

        return(
            <div>
                <img 
                ref={this.imageRef}
                alt={description}
                src={urls.regular}>
                </img>
            </div>
        );
    }
}


export default ImageCard;