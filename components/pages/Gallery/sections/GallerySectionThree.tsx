import React from 'react';
import { GalleryStripSection } from '../GalleryStripSection';


export const GallerySectionThree = () => {
    const listItems = [
        'Roof tiles/Gutters high pressure cleaning',
        'Ridge capping/collars/valleys and gable repointing with flexible cement',
        'Roof tiles painting Resine Dark Charcoal',
        'Broken/chipped tiles replacement',
    ];

    return (
        <GalleryStripSection
            src="/images/image-1.jpg"
            alt="Roof Restoration"
            leadingText="Roof restoration concrete tiles including:"
            listItems={listItems}
            title="BEFORE/AFTER ROOF RESTORATION"
            textColor="black"
            backgroundColor="rgb(207,207,212)" />
    );
};
