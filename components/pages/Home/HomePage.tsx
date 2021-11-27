/* eslint-disable @next/next/no-img-element */
// import styles from './HomePage.module.css';
import { WideStrip } from '@components/common/strips/WideStrip';
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';
import React from 'react';
import { BookNowCircleContainer } from './BookNowCircleContainer';
import { TextBlockSection } from './TextBlockSection';
import { TitleTextBlock } from './TitleTextBlock';
import { FullWidthImage } from './TopImage';
import { VideoWithTextBelow } from './VideoWithTextBelow';

const SectionOne = () => {
    return (
        <div>
            <FullWidthImage src="/images/image-1.jpg" />
            <BookNowCircleContainer />
        </div>
    );
};

export const SectionTwo = () => {
    return (
        <WideStrip align="center" height="200px">
            <div className="flex flex-col items-center w-full">
                <TitleTextBlock title="YOUR ROOF is your home's MAIN DEFENCE" />
                <div className="flex flex-col md:flex-row">
                    <VideoWithTextBelow
                        src="//player.vimeo.com/video/589829430?autoplay=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0"
                        videoTitle="Vimeo Video"
                        text="ANY PROJECT IS IMPORTANT FOR US"
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

export const SectionThree = () => {
    return (
        <WideStrip
            align="center"
            height="300px"
            backgroundColor="rgb(207,207,212)"
            className="flex flex-col items-center w-full lg:flex-row"
        >
            <div className="hidden md:flex w-1/2">
                <FullWidthImage src="/images/image-2-cropped.jpg" objectPosition="20% 0" />
            </div>
            <div className="pl-32 pr-32 flex flex-col items-center lg:w-1/2">
                <div className="w-full">
                    <TitleTextBlock
                        variant="h4"
                        fontColor="black"
                        title="WE DELIVER TOP QUALITY WORK AT UNBEATABLE PRICES !!"
                    />
                </div>
                <TextBlockSection
                    title="Perfect Installs"
                    text="Your roof is your home's main defense against the elements. Let us walk you through the best options to fit your needs and once you feel comfortable with your choice, we'll handle the complete restoration."
                />
                <TextBlockSection
                    title="Reliable Updates"
                    text="If you're looking to update or upgrade your roof, we've got you covered. Book a free consultation to discuss our  different types of roofing restoration and environmentally friendly options!"
                />
                <TextBlockSection
                    title="Upkeep & Repair"
                    text="Age and environmental factors can wreak havoc on your roof. Ignoring problems for too long can cause headaches down the road. Start with a free inspection today! "
                />
            </div>
            <div className="md:hidden">
                <FullWidthImage src="/images/image-2-cropped.jpg" objectPosition="20% 0" />
            </div>
        </WideStrip>
    );
};

export const HomePage = () => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - Home`}>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
        </Layout>
    );
};
