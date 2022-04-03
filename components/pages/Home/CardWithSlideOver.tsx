/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Dialog, Paper, Rating } from '@mui/material';
import { TextBlock } from '@components/common/text/TextBlock';
import { GoogleReview } from 'types';
import { format } from 'date-fns';
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
                    &ldquo;{review.text.slice(0, 100)}...&rdquo;
                </TextBlock>
                <TextBlock
                    onClick={toggleDialog}
                    className="cursor-pointer hover:shadow-xl text-center p-2 rounded-full"
                    color="black"
                    variant="body2"
                >
                    Read More...
                </TextBlock>
                <div>
                    <AdornedText
                        containerClassName="items-center"
                        StartAdornment={
                            <div className="rounded-full h-16 w-16 mr-10 p-1 z-50">
                                <img src="/brand-images/googlemaps.jpg" className="rounded-full ring-2" alt="" />
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
                <TextBlock justifyContent="left" className="p-10" color="black">
                    {review.text}
                </TextBlock>
            </Dialog>
        </>
    );
};
