import { WideStrip } from '@components/common/strips/WideStrip';
import { TextBlock } from '@components/common/text/TextBlock';
import React from 'react';
import { TitleTextBlock } from '../Home/TitleTextBlock';
import { FullWidthImage } from '../Home/TopImage';

export interface ServiceSectionProps {
    title: string;
    textColor: string;
    header: string;
    body: React.ReactNode;
    imageSrc: string;
    backgroundColor: string;
}
export const ServiceSection = ({ title, textColor, header, body, imageSrc, backgroundColor }: ServiceSectionProps) => {
    return (
        <WideStrip backgroundColor={backgroundColor} className="flex flex-col">
            <TitleTextBlock fontColor={textColor} title={title} marginTop="0px" />
            <div className="flex flex-col md:flex-row pl-8 pr-8 items-center">
                <div className="pl-8 pr-8">
                    <TitleTextBlock
                        variant="h6"
                        className="text-left pb-3"
                        fontColor={textColor}
                        title={header}
                        marginTop=""
                    />
                    <TextBlock color={textColor} paragraph>
                        {body}
                    </TextBlock>
                </div>
                <FullWidthImage
                    containerClassName="pl-8"
                    src={imageSrc}
                    objectPosition="50% 0"
                    height="300px"
                    objectFit="contain"
                />
            </div>
        </WideStrip>
    );
};
