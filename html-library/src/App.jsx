import React from 'react'
import ImageCompressor from './ImageCompressor';
import ImageLazyLoader from './ImageLazyLoader';


const App = () => {
  return (
    <div>
      {/* <ImageCompressor /> */}
      <ImageLazyLoader thumbnailSrc={'/vite.svg'} style={{ width: 600 }} src="https://images.pexels.com/photos/3137068/pexels-photo-3137068.jpeg?cs=srgb&dl=pexels-adrien-olichon-1257089-3137068.jpg&fm=jpg" alt="random" />
      <img style={{ width: 600 }} src="https://images.pexels.com/photos/3137068/pexels-photo-3137068.jpeg?cs=srgb&dl=pexels-adrien-olichon-1257089-3137068.jpg&fm=jpg" alt="" />
    </div>
  )
}

export default App;