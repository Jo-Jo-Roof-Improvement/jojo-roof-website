/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';
import { BeforeAndAfterSectionOne } from './sections/BeforeAndAfterSectionOne';
import { BeforeAndAfterSectionTwo } from './sections/BeforeAndAfterSectionTwo';
import { BeforeAndAfterSection } from './BeforeAndAfterStripSection';
import { beforeAndAfterData } from './beforeAndAfterData';

export const BeforeAndAfterPage = () => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - Gallery`}>
            <BeforeAndAfterSectionOne />
            <BeforeAndAfterSectionTwo />
            {beforeAndAfterData.map((sectionData, index) => {
                return <BeforeAndAfterSection {...sectionData} src={`before-and-after/ba-${index + 1}.jpg`} key={index} />;
            })}
        </Layout>
    );
};
