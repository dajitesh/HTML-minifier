'use client';
import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

const ImageLazyLoading = () => {
  return (
    <div>
      <div className='p-5 mt-16'>
        <div className="bg-white py-6 sm:py-8 lg:py-16">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
              Image Lazy Loading
              <br />
              <br />
            </h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              <p className='text-black font-semibold'>
                What is image lazy loading?
              </p>
              <br />
              Image lazy loading is an optimization technique that delays the loading of images outside the viewport (the visible area of the web page) until they are about to become visible to the user. This improves perceived website performance by prioritizing the loading of content that users see first.

              <br />
              <br />
              <p className='text-black font-semibold'>
                Benefits of image lazy loading:
              </p>
              <br />
              <ul>
                <li>Faster Page Load Times: By deferring image loading, only essential content loads initially, leading to a quicker initial page load.</li>
                <li>Improved User Experience: Users don't have to wait for all images to load before interacting with the page.</li>
                <li>Reduced Bandwidth Usage: Only images that enter the viewport are downloaded, saving bandwidth and potentially lowering data costs for users.</li>
              </ul>

              <br />
              <br />
              **How to use the image-lazy-loading Element:**

              <br />
              <br />
              1. Include the image-lazy-loading element in your HTML code.

              <br />
              2. Set the following attribute:
              <ul>
                <li>**data-image-source** (required): Path to the image file you want to lazy load.</li>
              </ul>

              <br />
              <br />
              **Example Usage:**

              <br />

              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<image-lazy-loading data-image-source="path/to/your/image.jpg"></image-lazy-loading>`}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageLazyLoading