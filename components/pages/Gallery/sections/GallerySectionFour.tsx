import React from 'react';
import { GalleryStripSection } from '../GalleryStripSection';


export const GallerySectionFour = () => {
    const listItems = [
        'Roof tiles/Gutters high pressure cleaning',
        'Ridge capping/collars repointing with flexible cement',
        'Replacement/Installation colorbond valley gutter & valley seal',
        'Broken tiles replacement & Cut tiles settled',
    ];

    return (
        <GalleryStripSection
            src="/images/image-1.jpg"
            alt="Roof Cleaning"
            leadingText="Roof restoration and repairs including :"
            listItems={listItems}
            title="BEFORE/AFTER ROOF CLEANING AND REPAIRS TERRACOTTA ROOF TILES"
            textColor="gray"
            backgroundColor="black" />
    );
};
