import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './ReactImage.css'

const ReactImages = ({photos}) => {

    if (!Array.isArray(photos) || photos.length === 0) {
        return null;
    }

    const galleryImages = photos.map(item => ({
        original: item.image,
        thumbnail: item.image,
        /* originalHeight: 33,
        originalWeight: 500 */
        
    }))

    return (
        <ImageGallery 
            items={galleryImages}

        />
    )
}

export default ReactImages;