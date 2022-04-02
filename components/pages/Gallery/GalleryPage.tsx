/* eslint-disable @next/next/no-img-element */

import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';
import { GallerySectionOne } from './sections/GallerySectionOne';
import { GallerySectionTwo } from './sections/GallerySectionTwo';
import { BeforeAndAfterSection } from './GalleryStripSection';
import { beforeAndAfterData } from './GalleryData';

export const GalleryPage = () => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - Gallery`}>
            <GallerySectionOne />
            <GallerySectionTwo />
            {beforeAndAfterData.map((sectionData, index) => {
                return (
                    <BeforeAndAfterSection {...sectionData} src={`before-and-after/ba-${index + 1}.jpg`} key={index} />
                );
            })}
        </Layout>
    );
};
