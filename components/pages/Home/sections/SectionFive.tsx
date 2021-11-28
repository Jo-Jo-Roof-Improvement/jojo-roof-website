import React, { useEffect } from 'react';
import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from '../TitleTextBlock';
import Carousel from 'react-material-ui-carousel';
import { CardWithSlideOver } from '../CardWithSlideOver';
import { CardContentItem } from 'types';
import { useMediaQuery } from '@mui/material';

export const SectionFive = () => {
    const items: CardContentItem[] = [
        {
            // eventually you'll want to call the google maps api to get this automatically - remember to filter by num stars
            circleLetters: 'ye',
            numStars: 5,
            feedback:
                'Polite, professional, good communicate of the job. Visible changes after roof cleaning and repointing.',
            name: 'Ye Wu',
            date: '25/11/2021',
        },
        {
            // eventually you'll want to call the google maps api to get this automatically - remember to filter by num stars
            circleLetters: 'ye',
            numStars: 5,
            feedback:
                'Polite, professional, good communicate of the job. Visible changes after roof cleaning and repointing.',
            name: 'Ye Wu',
            date: '25/11/2021',
        },
        {
            // eventually you'll want to call the google maps api to get this automatically - remember to filter by num stars
            circleLetters: 'ye',
            numStars: 5,
            feedback:
                'Polite, professional, good communicate of the job. Visible changes after roof cleaning and repointing.',
            name: 'Ye Wu',
            date: '25/11/2021',
        },
    ];

    useEffect(() => {
        //     'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyDJ3ABRrdoFx6ZSolzX8hAHkTtDcXKefzM';
    }, []);

    // const mediaQuery = useMediaQuery();

    return (
        <WideStrip align="center" height="300px" backgroundColor="white" className="flex flex-col justify-center">
            <div className="w-full flex flex-col justify-center items-center">
                <TitleTextBlock
                    className="bg-white mb-16"
                    variant="h3"
                    fontColor="black"
                    title="Reviews (under development)"
                />
                <div className="w-3/4 border-2 mb-12">
                    <Carousel className="flex flex-col mx-auto w-full mb-16">
                        {items.map((content: CardContentItem, key: number) => (
                            <CardWithSlideOver key={key} content={content} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </WideStrip>
    );
};
