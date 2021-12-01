import { WideStrip } from '@components/common/strips/WideStrip';
import React from 'react';
import { TitleTextBlock } from '../TitleTextBlock';
import { VideoWithTextBelow } from '../VideoWithTextBelow';

export const SectionTwo = () => {
    return (
        <WideStrip align="center" height="300px">
            <div className="flex flex-col items-center w-full mb-5">
                <TitleTextBlock title="Your ROOF is your home's MAIN DEFENCE" className="pl-2 pr-2 md:mb-0 lg:mb-6"  />
                <div className="flex flex-col md:flex-row md:w-full">
                    <VideoWithTextBelow
                        src="//player.vimeo.com/video/589829430?autoplay=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0"
                        videoTitle="Vimeo Video"
                        text="EVERY PROJECT IS IMPORTANT TO US"
                        buttonText="Contact Us"
                    />
                    <VideoWithTextBelow
                        src="//player.vimeo.com/video/589829548?autoplay=0&title=0&portrait=0&byline=0&badge=0"
                        videoTitle="Vimeo Video"
                        text="LET US WALK YOU THROUGH THE BEST OPTIONS TO FIT YOUR NEEDS"
                        buttonText="Get a free quote today"
                    />
                </div>
            </div>
        </WideStrip>
    );
};
