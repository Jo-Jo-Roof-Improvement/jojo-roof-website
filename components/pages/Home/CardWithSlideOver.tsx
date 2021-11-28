import React from 'react';
import { Card, Rating } from '@mui/material';
import { TextBlock } from '@components/common/text/TextBlock';
import { CardContentItem } from 'types';

export interface CardWithSlideOverProps {
    content: CardContentItem;
}
export const CardWithSlideOver = ({ content }: CardWithSlideOverProps) => {
    return (
        <Card className="flex flex-col justify-center items-center h-64 border-2 w-72">
            <div className="rounded-full bg-blue-500" style={{ height: '75px', width: '75px' }}>
                <TextBlock
                    align="center"
                    variant="h4"
                    className="flex flex-row justify-center align-middle items-center"
                >
                    {content.circleLetters}
                </TextBlock>
            </div>
            <Rating value={content.numStars} readOnly size="large" />
            <TextBlock className="text-center" color="white" variant="h3" title="Reviews"></TextBlock>
        </Card>
    );
};
