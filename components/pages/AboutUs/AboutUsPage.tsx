/* eslint-disable @next/next/no-img-element */
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';
import React from 'react';
import { AboutUsSectionTwo } from './sections/AboutUsSectionTwo';
import { AboutUsSectionOne } from './sections/AboutUsSectionOne';
import { GoogleReview } from 'types';
import { AboutUsSectionThree } from './sections/AboutUsSectionThree';
import { AboutUsSectionFour } from './sections/AboutUsSectionFour';

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


