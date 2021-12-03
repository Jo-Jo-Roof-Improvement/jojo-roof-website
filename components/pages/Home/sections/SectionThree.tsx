import { WideStrip } from '@components/common/strips/WideStrip';
import React from 'react';
import { TextBlockSection } from '../TextBlockSection';
import { TitleTextBlock } from '../TitleTextBlock';
import { FullWidthImage } from '../TopImage';

export const SectionThree = () => {
    return (
        <WideStrip
            align="center"
            maxHeight=""
            backgroundColor="rgb(207,207,212)"
            className="flex flex-col items-center w-full lg:flex-row"
        >
            <div className="flex md:w-full lg:hidden">
                <FullWidthImage src="/images/image-2-cropped.jpg" objectPosition="20% 0" />
            </div>
            <div className="pl-5 pr-5 flex flex-col items-center md:w-3/4 pb-10">
                <div className="w-full">
                    <TitleTextBlock
                        className="pt-10"
                        marginTop=""
                        variant="h4"
                        fontColor="black"
                        title="WE DELIVER TOP QUALITY WORK AT UNBEATABLE PRICES !!"
                    />
                </div>
                <TextBlockSection
                    title="Perfect Installs"
                    text="Your roof is your home's main defense against the elements. Let us walk you through the options that will fit your needs and once you feel comfortable with your choice, we will handle the complete restoration."
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
            <div className="hidden lg:flex m-10">
                <FullWidthImage src="/images/image-2-cropped.jpg" objectPosition="20% 0" />
            </div>
        </WideStrip>
    );
};
