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
        <WideStrip backgroundColor={backgroundColor} className="flex flex-col pb-10 pt-10">
            <TitleTextBlock fontColor={textColor} title={title} marginTop="" containerClassName="pt-10 md:pt-0" />
            <div className="flex flex-col md:flex-row pl-8 pr-8 pt-10 items-center">
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
                    src={imageSrc}
                    height="250px"
                    objectPosition="50%"
                    objectFit="cover"
                />
            </div>
        </WideStrip>
    );
};
