/* eslint-disable @next/next/no-img-element */
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';
import React from 'react';
import { SectionThree } from './sections/SectionThree';
import { SectionOne } from './sections/SectionOne';
import { SectionTwo } from './sections/SectionTwo';
import { SectionFive } from './sections/SectionFive';
import { GoogleReview } from 'types';
import { SectionFour } from './sections/SectionFour';
import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from './TitleTextBlock';

export interface HomePageProps {
    galleryPhotoList: { original: string }[];
    reviews: GoogleReview[];
}
export const HomePage = ({ galleryPhotoList, reviews }: HomePageProps) => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - Home`}>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour galleryPhotoList={galleryPhotoList} />
            <SectionFive reviews={reviews} />
        </Layout>
    );
};

export const Header = () => {
    return (
        <WideStrip height="200px" className="flex flex-col">
            <TitleTextBlock marginTop="" variant="h5" title="See the difference" />
            <TitleTextBlock className="font-semibold" marginTop="" variant="h2" title="Jo Jo's Roof Improvement" />
        </WideStrip>
    );
};
