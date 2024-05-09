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

    return (
        <video ref={videoRef} controls style={style}>
            <source type="video/mp4" />
            <p>{alt}</p>
        </video>
    );
};

export default VideoLazyLoader;