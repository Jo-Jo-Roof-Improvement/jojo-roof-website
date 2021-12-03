import { WideStrip } from '@components/common/strips/WideStrip';
import React from 'react';
import { InstagramGallery } from '../../AboutUs/InstagramGallery';
import { TitleTextBlock } from '../../Home/TitleTextBlock';

export const SectionThree = () => {
    return (
        <WideStrip className="flex flex-col" maxHeight="">
            <TitleTextBlock title="Instagram" className="pb-10" />
            <div className="w-2/3 mb-5">
                <InstagramGallery />
            </div>
        </WideStrip>
    );
};
