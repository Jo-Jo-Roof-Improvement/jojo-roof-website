/* eslint-disable @next/next/no-img-element */
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';

import { ServiceSectionThree } from './sections/ServiceSectionThree';
import { ServiceSectionFour } from './sections/ServiceSectionFour';
import { ServiceSectionFive } from './sections/ServiceSectionFive';
import { ServicesSectionOne } from './sections/ServicesSectionOne';
import { ServicesSectionTwo } from './sections/ServicesSectionTwo';
import { ServicesSectionSix } from './sections/ServicesSectionSix';
import { ServicesSectionSeven } from './sections/ServicesSectionSeven';

export const ServicesPage = () => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - Services`}>
            <ServicesSectionOne />
            <ServicesSectionTwo />
            <ServiceSectionThree />
            <ServiceSectionFour />
            <ServiceSectionFive />
            <ServicesSectionSix />
            <ServicesSectionSeven />
        </Layout>
    );
};
