import { WideStrip } from '@components/common/strips/WideStrip';
import { TextBlock } from '@components/common/text/TextBlock';
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';
import React from 'react';

export const AboutUsSectionOne = () => {
    return (
        <WideStrip align="center" height="200px">
            <TextBlock>NOICE</TextBlock>

        </WideStrip>
    );
};

export const AboutUsPage = () => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - About Us`}>
            <AboutUsSectionOne />
        </Layout>
    );
};
