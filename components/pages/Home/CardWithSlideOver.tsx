/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Card, Dialog, Paper, Rating } from '@mui/material';
import { TextBlock } from '@components/common/text/TextBlock';
import { GoogleReview } from 'types';
import { format } from 'date-fns';
import GoogleIcon from '@mui/icons-material/Google';
import { AdornedText } from '@components/common/text/AdornedText';
import { TitleTextBlock } from './TitleTextBlock';
import classNames from 'classnames';

export interface CardWithSlideOverProps {
    review: GoogleReview;
}
export const CardWithSlideOver = ({ review }: CardWithSlideOverProps) => {
    const [open, setOpen] = useState(false);

    const toggleDialog = () => {
        setOpen(!open);
    };

    return (
        <>
            <Paper className={classNames('flex flex-col justify-evenly items-center h-96 border-2 w-72 pl-3 pr-3')}>
                <div className="rounded-full bg-blue-500" style={{ height: '75px', width: '75px' }}>
                    <img src={review.profile_photo_url} alt="test" />
                </div>
                <Rating value={review.rating} readOnly size="large" />
                <TextBlock className="text-center" color="black" variant="body1">
                    &ldquo;{review.text.slice(0, 100)}&rdquo;
                </TextBlock>
                <TextBlock onClick={toggleDialog} className="text-center" color="black" variant="body2">
                    See More...
                </TextBlock>
                <div>
                    <AdornedText
                        StartAdornment={
                            <div className="rounded-full h-6 mr-6 p-1 border-2">
                                <img src="/brand-images/google-logo.png" alt="google" />
                            </div>
                        }
                        text={format(new Date(review.time * 1000), 'dd / MM / yyyy')}
                    />
                </div>
            </Paper>
            <Dialog className="overflow-y-scroll" open={open} onClose={toggleDialog}>
                <TitleTextBlock
                    className="pl-10 pr-10"
                    fontColor="black"
                    variant="h5"
                    title={`${review.author_name} says...`}
                ></TitleTextBlock>
                <TextBlock justifyContent="left" fontWeight="200" className="p-10" color="black">
                    {review.text}
                </TextBlock>
            </Dialog>
        </>
    );
};
