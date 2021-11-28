/* eslint-disable @next/next/no-img-element */
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';
import React from 'react';
import { SectionFour } from './sections/SectionFour';
import { SectionThree } from './sections/SectionThree';
import { SectionOne } from './sections/SectionOne';
import { SectionTwo } from './sections/SectionTwo';
import { SectionFive } from './sections/SectionFive';
import { GoogleReview } from 'types';

export interface HomePageProps {
    galleryPhotoList: { original: string }[];
    reviews: GoogleReview[];
}
export const HomePage = ({ galleryPhotoList, reviews }: HomePageProps) => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - Home`}>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour galleryPhotoList={galleryPhotoList} />
            <SectionFive reviews={reviews} />
        </Layout>
    );
};
