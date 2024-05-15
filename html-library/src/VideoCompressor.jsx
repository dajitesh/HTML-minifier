import React, { useState } from 'react';

const VideoCompressor = ({ source }) => {
    const [compressedVideoUrl, setCompressedVideoUrl] = useState('');

    const compressVideo = async () => {
        try {
            const formData = new FormData();
            formData.append('video', source);

            const response = await fetch('/minify-video', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const { videoUrl } = await response.json();
                setCompressedVideoUrl(videoUrl);
            } else {
                console.error('Failed to compress video');
            }
        } catch (error) {
            console.error('Error compressing video', error);
        }
    };

    return (
        <div>
            <video controls>
                <source src={compressedVideoUrl || source} type="video/mp4" />
            </video>
            <button onClick={compressVideo}>Compress Video</button>
        </div>
    );
};

export default VideoCompressor;