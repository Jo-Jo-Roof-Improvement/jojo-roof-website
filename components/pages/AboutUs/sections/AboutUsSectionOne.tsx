import { WideStrip } from '@components/common/strips/WideStrip';
import { TextBlock } from '@components/common/text/TextBlock';
import React from 'react';
import { TitleTextBlock } from '../../Home/TitleTextBlock';
import { FullWidthImage } from '../../Home/TopImage';


export const AboutUsSectionOne = () => {
    const textblockClasses = 'flex pl-7 pr-7 pb-10 text-white text-center md:text-left ';
    return (
        <WideStrip align="center" height="200px" className="flex flex-col md:flex-row">
            <div className="flex md:hidden w-1/2">
                <FullWidthImage src="/images/image-3.jpg" objectPosition="100% 0" />
            </div>
            <div className="flex flex-col md:w-1/2">
                <TitleTextBlock
                    className="pb-10"
                    title="Precision, Punctuality and Commitment to excellence"
                    variant="h4" />
                <TextBlock paragraph className={textblockClasses}>
                    We are a fully-certified professionals ready to tackle anything from complex and large scale
                    construction projects to minor repair jobs.
                </TextBlock>
                <TextBlock paragraph className={textblockClasses}>
                    We know that dealing with all those mundane remodeling tasks can get pretty stressful, but we are
                    here to take the load off your shoulders. We are fueled by our commitment to excellence and go the
                    extra mile to make sure clients are fully satisfied with our work.
                </TextBlock>
                <TextBlock paragraph className={textblockClasses}>
                    Get in touch with us today for a free consultation.
                </TextBlock>
            </div>
            <div className="hidden md:flex">
                <FullWidthImage src="/images/image-3.jpg" objectPosition="20% 0" />
            </div>
        </WideStrip>
    );
};
