import React, { useEffect, useRef } from 'react';

const VideoLazyLoader = ({ src, alt, style }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        videoRef.current.src = src;
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, [src]);

    function convertCssToJsxStyle(cssString) {
        // Split the CSS string by semicolons
        const rules = cssString.split(';');

        const styleObject = {};

        for (const rule of rules) {
            // Trim whitespace
            const trimmedRule = rule.trim();

            // Check for empty rule or missing colon
            if (!trimmedRule || !trimmedRule.includes(':')) {
                continue;
            }

            // Split the rule by colon
            const [key, value] = trimmedRule.split(':');

            // Convert key to camelCase
            const camelCaseKey = key.replace(/-([a-z])/g, (match, group1) => group1.toUpperCase());

            // Add key-value pair to style object
            styleObject[camelCaseKey] = value.trim();
        }
        console.log(styleObject);

        return styleObject;
    }
    

    return (
        <video ref={videoRef} controls style={convertCssToJsxStyle(style)}>
            <source type="video/mp4" />
            <p>{alt}</p>
        </video>
    );
};

export default VideoLazyLoader;