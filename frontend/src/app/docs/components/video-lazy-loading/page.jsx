'use client';
import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

const VideoLazyLoading = () => {
  return (
    <div>
      <div className='p-5 mt-16'>
        <div className="bg-white py-6 sm:py-8 lg:py-16">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
              Video Lazy Loading
              <br />
              <br />
            </h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              <p className='text-black font-semibold'>
                What is video lazy loading?
              </p>
              <br />
              Video lazy loading is an optimization technique that delays the loading of videos outside the viewport until they are about to become visible to the user. Similar to image lazy loading, it prioritizes the loading of content that users see first, leading to a faster perceived performance.

              <br />
              <br />
              <p className='text-black font-semibold'>
                Benefits of video lazy loading:
              </p>
              <br />
              <ul>
                <li>Faster Page Load Times: By deferring video loading, only essential content loads initially, leading to a quicker initial page load.</li>
                <li>Improved User Experience: Users don't have to wait for all videos to load before interacting with the page.</li>
                <li>Reduced Bandwidth Usage: Only videos that enter the viewport are downloaded, saving bandwidth and potentially lowering data costs for users.</li>
                <li>Improved Mobile Performance: This is especially important for mobile users with limited data plans.</li>
              </ul>

              <br />
              <br />
              **How to use the video-lazy-loading Element:**

              <br />
              <br />
              1. Include the video-lazy-loading element in your HTML code.

              <br />
              2. Set the following attribute:
              <ul>
                <li>**data-video-source** (required): Path to the video file you want to lazy load.</li>
              </ul>

              <br />
              <br />
              **Example Usage:**

              <br />

              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<video-lazy-loading data-video-source="path/to/your/video.mp4"></video-lazy-loading>`}
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

export default VideoLazyLoading;