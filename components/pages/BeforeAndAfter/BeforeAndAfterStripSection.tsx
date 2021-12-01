/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from '../Home/TitleTextBlock';
import { TextBlock } from '@components/common/text/TextBlock';
import { JoListItem } from '@components/common/lists/JoListItem';
import { JoList } from '@components/common/lists/JoList';

export type BeforeAndAfterSectionProps = {
    src: string;
    alt: string;
    title: string;
    listItems: string[];
    textColor: string;
    backgroundColor: string;
};
export const BeforeAndAfterSection = ({
    src,
    title,
    listItems,
    alt,
    textColor,
    backgroundColor,
}: BeforeAndAfterSectionProps) => {
    return (
        <WideStrip backgroundColor={backgroundColor} height="350px">
            <div className="flex flex-col md:flex-row justify-around items-center md:justify-center">
                <div className="w-1/2  pt-24 md:p-10 m-2">
                    <img src={src} alt={alt} />
                </div>
                <div className="flex flex-col items-center p-5">
                    <TitleTextBlock className="pb-10" gutterBottom variant="h4" fontColor={textColor} title={title} />
                    <TextBlock className="mb-5" gutterBottom variant="h5" color={textColor}>Restoration Details:</TextBlock>
                    <JoList>
                        {listItems.map((item, index) => (
                            <JoListItem color={textColor} key={index}>
                                <TextBlock color={textColor}>- {item}</TextBlock>
                            </JoListItem>
                        ))}
                    </JoList>
                </div>
            </div>
        </WideStrip>
    );
};
