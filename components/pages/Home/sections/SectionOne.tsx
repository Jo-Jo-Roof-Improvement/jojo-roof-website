import React from 'react';
import { BookNowCircleContainer } from '../BookNowCircleContainer';
import { FullWidthImage } from '../TopImage';

export const SectionOne = () => {
    return (
        <div className="sticky">
            <FullWidthImage src="/images/image-1.jpg" />
            <BookNowCircleContainer />
        </div>
    );
};
