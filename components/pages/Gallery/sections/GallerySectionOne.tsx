import React from 'react';
import { MediumStrip } from '@components/common/strips/MediumStrip';
import { TitleTextBlock } from '../../Home/TitleTextBlock';


export const GallerySectionOne = () => {
    return (
        <MediumStrip align="center" backgroundColor="white" height="150px">
            <div className="h-full flex flex-col items-center justify-center">
                <TitleTextBlock fontColor="black" title="Gallery" marginTop="" />
            </div>
        </MediumStrip>
    );
};
