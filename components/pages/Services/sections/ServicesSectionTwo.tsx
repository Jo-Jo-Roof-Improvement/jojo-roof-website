import { MediumStrip } from '@components/common/strips/MediumStrip';
import { TitleTextBlock } from '@components/pages/Home/TitleTextBlock';
import { FullWidthImage } from '@components/pages/Home/TopImage';
import React from 'react';

export const ServicesSectionTwo = () => {
    return (
        <MediumStrip align="center" backgroundColor="white" height="150px" className="w-full justify-evenly">
            <div className="flex flex-col md:flex-row items-center md:align-center">
                <TitleTextBlock
                    fontColor="black"
                    variant="h5"
                    title="Learn about the range of high quality services we provide that will keep your roof in it's best condition"
                    marginTop=""
                    className="w-full"
                />
                <div style={{ height: '150px', width: '100%' }} className="w-1/2">
                    <FullWidthImage src="images/image-3.jpg" objectPosition="10% 0" height="150px" objectFit="cover" />
                </div>
            </div>
        </MediumStrip>
    );
};
