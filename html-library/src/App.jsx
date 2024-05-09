import React from 'react'
import ImageCompressor from './ImageCompressor';
<<<<<<< HEAD
// import ImageLazyLoader from './ImageLazyLoader';
// import FileMinifier from './FileMinifier';
=======
import ImageLazyLoader from './ImageLazyLoader';
import FileMinifier from './FileMinifier';
>>>>>>> 6957eb725e8a646abe8844270b5e508cb99f6df9


const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <ImageCompressor />
      {/* <ImageLazyLoader thumbnailSrc={'/vite.svg'} style={{ width: 600 }} src="https://images.pexels.com/photos/3137068/pexels-photo-3137068.jpeg?cs=srgb&dl=pexels-adrien-olichon-1257089-3137068.jpg&fm=jpg" alt="random" /> */}
      {/* <img style={{ width: 600 }} src="https://images.pexels.com/photos/3137068/pexels-photo-3137068.jpeg?cs=srgb&dl=pexels-adrien-olichon-1257089-3137068.jpg&fm=jpg" alt="" /> */}

      {/* <FileMinifier fileSource="console.log('Hello World!');" fileType="js" /> */}
=======
      {/* <ImageCompressor /> */}
      {/* <ImageLazyLoader thumbnailSrc={'/vite.svg'} style={{ width: 600 }} src="https://images.pexels.com/photos/3137068/pexels-photo-3137068.jpeg?cs=srgb&dl=pexels-adrien-olichon-1257089-3137068.jpg&fm=jpg" alt="random" /> */}
      {/* <img style={{ width: 600 }} src="https://images.pexels.com/photos/3137068/pexels-photo-3137068.jpeg?cs=srgb&dl=pexels-adrien-olichon-1257089-3137068.jpg&fm=jpg" alt="" /> */}

      <FileMinifier fileSource="console.log('Hello World!');" fileType="js" />
>>>>>>> 6957eb725e8a646abe8844270b5e508cb99f6df9

    </div>
  )
}

export default App;