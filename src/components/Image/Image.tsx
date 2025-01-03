import React, { useState } from 'react';
import images from '~/assets/images';


interface ImageProps {
    src?: string;
    alt: string;
    className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className = '' }) => {
    const [image, setImage] = useState('');

    const handleError = () => {
        setImage(images.noAvatar);
    };
    return (
        <img
            className={`h-full w-full object-cover overflow-hidden ${className}`}
            src={src || image}
            alt={alt}
            onError={handleError}
        />
    );
}

export default Image;
