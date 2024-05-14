'use client';
import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const FileMinifier = () => {
  return (
    <div>
      <div className='p-5 mt-16'>
        <div className="bg-white py-6 sm:py-8 lg:py-16">
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
              File Minifier
              <br />
              <br />
            </h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              <p className='text-black font-semibold'>
                What is file minifier?

              </p>
              <br />
              A file minifier is a tool or software used to reduce the size of files, typically code files such as HTML, CSS, or JavaScript, by removing unnecessary characters like white spaces, comments, and line breaks. This process helps optimize the file for faster loading times on web pages and reduces bandwidth usage.

              <br />
              <br />

              <p className='text-black font-semibold'>
                Why do we use file minifier?

              </p>
              <br />
              File minifiers are used primarily for optimization purposes in web development. Here are some key reasons why we use file minifiers:<br /><br />

              Faster Loading Times: Minifying files reduces their size by removing unnecessary characters, which results in faster download and rendering times for web pages.<br /><br />

              Bandwidth Reduction: Smaller file sizes mean less data needs to be transferred between the server and the user's browser, reducing bandwidth usage and potentially lowering hosting costs.<br /><br />

              Improved Performance: Optimized files can lead to improved website performance, including quicker page rendering, smoother user interactions, and better overall responsiveness.<br /><br />

              SEO Benefits: Faster-loading pages tend to rank higher in search engine results, so minifying files can indirectly contribute to improved search engine optimization (SEO) and better visibility for websites.<br /><br />

              Enhanced User Experience: Users expect fast and responsive websites. Minifying files helps meet these expectations by reducing latency and providing a smoother browsing experience.<br /><br />

              Code Compression: Minifying code files can also obfuscate and compress the code, making it harder for others to reverse engineer or steal intellectual property.<br /><br />

              Overall, file minifiers play a crucial role in optimizing websites for performance, efficiency, and user satisfaction.

              <br /><br />
              Customizable: While Resource Minifier works excellently right out of the box, it also offers options for customization to meet advanced needs.
              <br /><br />
              Community-Driven: Being an open-source tool, it thrives on the collaborative input of its user community. You can contribute to its development, suggest features, or provide feedback anytime.
              <br /><br />Cost-Effective: As a free tool, it offers an economical solution for optimizing web resources without compromising quality.
              Get Started Now!
              <br />
              <br />
              Dive into our documentation to see how Resource Minifier can be integrated into your project. Our step-by-step guide makes it easy to get started, and our examples will help you see the tool in action. If you're ready to make your websites leaner and faster, you’re in the right place.
            </p>
          </div>
        </div>

      </div>







      <div className="container mx-auto p-4">


        <div className="demo">
          <CopyBlock
            language={'html'}
            text={`<file-minify data-file-source="your_css_file.css" data-file-type="css" />
<script src="http://localhost:5000/main.js"></script>`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />

        </div>
      </div>



    </div>
  )
}

export default FileMinifier;