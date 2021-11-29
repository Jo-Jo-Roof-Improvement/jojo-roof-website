import { MediumStrip } from '@components/common/strips/MediumStrip';
import { TitleTextBlock } from '@components/pages/Home/TitleTextBlock';
import React from 'react';

export const ServicesSectionOne = () => {
    return (
        <MediumStrip align="center" backgroundColor="white" height="150px">
            <div className="h-full flex flex-col items-center justify-center">
                <TitleTextBlock fontColor="black" title="Our Services" marginTop="" />
            </div>
        </MediumStrip>
    );
};
