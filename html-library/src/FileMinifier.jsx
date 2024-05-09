import React, { useEffect } from 'react';

const FileMinifier = ({fileSource}) => {

    const minifyCSS = (css) => {
        fetch('http://localhost:5000/util/minify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ css }),
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            return data;
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        const css = `
    body {
      font-family: sans-serif;
    }
  `;

        const minifiedCSS = minifyCSS(css);
        console.log(minifiedCSS);
    }, [])


    return (
        <div>FileMinifier</div>
    )
}

export default FileMinifier
