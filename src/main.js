import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import MediaGallery from './components/MediaGallery/MediaGallery'

ReactDOM.render(
    <MediaGallery />,
    document.getElementById('container')
);