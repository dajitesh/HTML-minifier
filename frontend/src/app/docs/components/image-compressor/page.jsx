'use client';
import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const ImageCompressor = () => {
  return (
    <div>
      <div className='p-5 mt-16'>
        <div className="bg-white py-6 sm:py-8 lg:py-16">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
              Image Compressor
              <br />
              <br />
            </h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              <p className='text-black font-semibold'>
                What is image compression?
              </p>
              <br />
              Image compression is a technique used to reduce the file size of an image without significantly affecting its visual quality. This is achieved by removing redundant data or applying lossy compression methods that discard some less noticeable information.

              <br />
              <br />
              <p className='text-black font-semibold'>
                Why use image compression?
              </p>
              <br />
              There are several benefits to using image compression, especially for web development:

              <br />
              <br />
              <ul>
                <li>Faster Loading Times: Smaller image files load quicker, improving website performance and user experience.</li>
                <li>Bandwidth Reduction: Reduced file sizes mean less data needs to be transferred, saving bandwidth and potentially lowering hosting costs.</li>
                <li>Improved SEO: Faster loading pages tend to rank higher in search engine results.</li>
                <li>Enhanced User Experience: Users expect fast loading times. Image compression helps deliver a smoother browsing experience.</li>
              </ul>

              <br />
              <br />
              **How to use the Image Compressor Element:**

              <br />
              <br />
              1. Include the image-compress element in your HTML code.

              <br />
              2. Set the following attributes:
              <ul>
                <li>**data-image-source** (required): Path to the image file you want to compress.</li>
                <li>**data-output-format** (optional): Specify the desired output format (e.g., "jpg", "png", "webp"). Defaults to the original format if not specified.</li>
                <li>**data-quality** (optional): Set the compression quality for lossy formats (e.g., JPG, WEBP) between 0 (lowest quality, smallest size) and 100 (highest quality, largest size). Defaults to 80.</li>
              </ul>

              <br />
              <br />
              **Example Usage:**

              <br />

              <div className='mt-4'>
                <CopyBlock
                  language={'html'}
                  text={`<img-minified src="img_path.png" alt="alt_name" />`}
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

export default ImageCompressor;