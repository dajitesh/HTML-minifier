'use client';
import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const ImageCompressor = () => {
  return (
    <div className='mt-28'>


<div className='mt-28'>Image Compressor</div>

      <div className="col-span-8">
        <div className="col-span-8 p-10">
          <div className="mockup-code p-10">
            <CopyBlock
              text={`Code HERE`}
              language={'html'}
              theme={dracula}
              showLineNumbers={true}
              wrapLongLines={true}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default ImageCompressor;