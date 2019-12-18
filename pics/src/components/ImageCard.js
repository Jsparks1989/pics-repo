import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    // Runs when ImageCard component mounts.
    componentDidMount(){
        // When each individual image has loaded, run the callback function setSpan.
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight);

        const height = this.imageRef.current.clientHeight;

        // Calculate how many spans to set to grid-row-end in CSS.
        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    }

    render() {
        // Destructuring image object.
        const {description, urls} = this.props.image;

        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
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