import React, { useState } from 'react';
import UglifyJS from 'uglify-js';
import CleanCSS from 'clean-css';

const FileMinifier = (props) => {
    const [minifiedContent, setMinifiedContent] = useState('');

    const handleMinify = () => {
        const { fileSource, fileType } = props;
        let minifiedContent = '';

        if (fileType === 'js') {
            const result = UglifyJS.minify(fileSource);
            minifiedContent = result.code;
        } else if (fileType === 'css') {
            const result = new CleanCSS().minify(fileSource);
            minifiedContent = result.styles;
        }

        setMinifiedContent(minifiedContent);
    };

    return (
        <div>
            <button onClick={handleMinify}>Minify</button>
            <pre>{minifiedContent}</pre>
        </div>
    );
};

export default FileMinifier;
