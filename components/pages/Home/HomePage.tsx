/* eslint-disable @next/next/no-img-element */
// import styles from './HomePage.module.css';
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';
import React from 'react';
import { SectionFour } from './sections/SectionFour';
import { SectionThree } from './sections/SectionThree';
import { SectionOne } from './sections/SectionOne';
import { SectionTwo } from './sections/SectionTwo';
import { SectionFive } from './sections/SectionFive';

export interface HomePageProps {
    galleryPhotoList: { original: string }[];
}
export const HomePage = ({ galleryPhotoList }: HomePageProps) => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - Home`}>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour galleryPhotoList={galleryPhotoList} />
            <SectionFive />
        </Layout>
    );
};
