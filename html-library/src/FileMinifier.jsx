import React, { useEffect, useState } from 'react';

const FileMinifier = ({ fileSource }) => {

    const [minifiedContent, setMinifiedContent] = useState('');

    const minifyCSS = (css) => {
        fetch('http://localhost:5000/minify/minify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ css }),
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            setMinifiedContent(data);
            return data;
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetch(fileSource)
            .then((response) => response.text())
            .then((css) => {
                const minifiedCSS = minifyCSS(css);
                // console.log(minifiedCSS);
                // setMinifiedContent(minifiedCSS);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <style>
            {minifiedContent}
        </style>
    )
}

export default FileMinifier
