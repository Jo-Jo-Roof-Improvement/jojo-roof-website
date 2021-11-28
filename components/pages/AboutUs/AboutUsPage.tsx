/* eslint-disable @next/next/no-img-element */
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';
import React from 'react';
import { AboutUsSectionTwo } from './sections/AboutUsSectionTwo';
import { AboutUsSectionOne } from './sections/AboutUsSectionOne';
import { GoogleReview } from 'types';
import { AboutUsSectionThree } from './sections/AboutUsSectionThree';
import { TitleTextBlock } from '../Home/TitleTextBlock';
import { WideStrip } from '@components/common/strips/WideStrip';
import { AdornedText } from '@components/common/text/AdornedText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { InstagramGallery } from './InstagramGallery';

export const AboutUsPage = ({ reviews }: { reviews: GoogleReview[] }) => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - About Us`}>
            <AboutUsSectionOne />
            <AboutUsSectionTwo />
            <AboutUsSectionThree reviews={reviews} />
            <AboutUsSectionFour />
        </Layout>
    );
};

export const AboutUsSectionFour = () => {
    return (
        <WideStrip className="flex flex-col">
            <TitleTextBlock title="Our Clients" className="pb-10" />
            <InstagramGallery />
            <AdornedText
                textClassName="text-white"
                variant="h6"
                EndAdornment={<ArrowForwardIosIcon style={{ color: 'white', fontSize: '14pt' }} className="flex mt-2 ml-2" />}
                text="Check them out"
                containerClassName="pb-10"
            />
        </WideStrip>
    );
};
