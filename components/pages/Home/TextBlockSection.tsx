import { TextBlock } from '@components/common/text/TextBlock';
import { TypographyVariant } from '@mui/material';
import React from 'react';
import { TitleTextBlock } from './TitleTextBlock';


export interface TextBlockSectionProps {
    title: string;
    text: string;
    titleVariant?: TypographyVariant;
    textVariant?: TypographyVariant;
}
export const TextBlockSection = ({ title, text, titleVariant = 'h5', textVariant }: TextBlockSectionProps) => {
    return (
        <div className="flex flex-col items-center w-full">
            <TitleTextBlock fontColor="black" title={title} variant={titleVariant} className="pb-5" />
            <TextBlock paragraph color="black" align="center" variant={textVariant}>
                {text}
            </TextBlock>
        </div>
    );
};
