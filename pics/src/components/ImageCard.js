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

        // Listening for the event 'load'. When images have successfully loads up
        // or downloads from the internet and is displayed obn screen, it emits the 'load'
        // event. Once load event has been emitted, the images have been successfully loaded 
        // and we can get the actual height of the image. Calling callback function setSpans().
        this.imageRef.current.addEventListener('load', this.setSpans);
    }


    setSpans = () => {
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