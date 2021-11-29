/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from '../Home/TitleTextBlock';
import { TextBlock } from '@components/common/text/TextBlock';
import { JoListItem } from '@components/common/lists/JoListItem';
import { JoList } from '@components/common/lists/JoList';

export const GalleryStripSection = ({
    src,
    title,
    listItems,
    leadingText,
    alt = 'gallery',
    textColor = 'white',
    backgroundColor = 'black',
}: {
    src: string;
    alt: string;
    leadingText: string;
    listItems: string[];
    title: string;
    textColor?: string;
    backgroundColor?: string;
}) => {
    return (
        <WideStrip backgroundColor={backgroundColor} height="350px">
            <div className="flex flex-col md:flex-row justify-around items-center md:justify-center">
                <div className="w-1/2 md:p-10 m-2">
                    <img src={src} alt={alt} />
                </div>
                <div className="flex flex-col items-center p-5">
                    <TitleTextBlock gutterBottom variant="h4" fontColor={textColor} title={title} />
                    <TextBlock color={textColor}>{leadingText}</TextBlock>
                    <JoList>
                        {listItems.map((item, index) => (
                            <JoListItem color={textColor} key={index}>
                                <TextBlock color={textColor}>{item}</TextBlock>
                            </JoListItem>
                        ))}
                    </JoList>
                </div>
            </div>
        </WideStrip>
    );
};
