import React, {Component} from 'react'
import axios from 'axios'

export default class MediaGallery extends Component {

    // set initial state of elements
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedImage: ''
        }
    }

    // make API request
    // TODO: move it to its own 'action'
    // TODO: remove hardcoded variables such as API KEY and params and turn them into variables
    componentDidMount() {
        var _this = this;
        this.serverRequest =
            axios
                .get('https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=ca3783111609d69139840916b7a01ad2&format=json&nojsoncallback=1&per_page=5')
                .then(function(result) {
                    _this.setState({
                        items: result.data.photos.photo,
                        selectedImage: _this.imageURL(result.data.photos.photo[0])
                    })
                })
    }

    // assemble image URL
    imageURL(item) {
        return 'http://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg'
    }

    // handle image selection
    selectImage(selectedImage) {
        this.setState({
            selectedImage
        })
    }

    // render the app
    render() {
        const {items, images, selectedImage} = this.state;
        return (
            <div className="media-gallery">
                <h1 className="media-gallery__title">Flickr API Component</h1>
                <div className="media-gallery-thumbnails">
                    {this.state.items.length ?
                        this.state.items.map((item, index) =>
                            <div key={index} onClick={this.selectImage.bind(this,this.imageURL(item))}>
                                <img className="media-gallery-thumbnails__img" src={this.imageURL(item)}/>
                            </div>)
                        : <div>Loading...</div>
                    }
                </div>
                <div className="media-gallery-main">
                    <div>
                        <img className="media-gallery-main__img" src={selectedImage} />
                    </div>
                </div>
            </div>
        )
    }
}