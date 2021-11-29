/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';
import { GallerySectionOne } from './sections/GallerySectionOne';
import { GallerySectionTwo } from './sections/GallerySectionTwo';
import { GalleryStripSection } from './GalleryStripSection';
import { GallerySectionThree } from './sections/GallerySectionThree';
import { GallerySectionFour } from './sections/GallerySectionFour';

export const GalleryPage = () => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - Gallery`}>
            <GallerySectionOne />
            <GallerySectionTwo />
            <GallerySectionThree />
            <GallerySectionFour />
            <GallerySectionFive />
        </Layout>
    );
};

export const GallerySectionFive = () => {
    const listItems = ['Roof metal/Gutters high pressure cleaning ', 'Roof metal painting Resine Charcoal'];

    return (
        <GalleryStripSection
            src="/images/image-1.jpg"
            alt="Colorbond and Meal"
            leadingText="Roof restoration including : "
            listItems={listItems}
            title="BEFORE/AFTER ROOF RESTORATION COLORBOND/METAL"
            textColor="white"
            backgroundColor="rgb(22,22,22)"
        />
    );
};


