import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';

import { SectionThree } from './sections/SectionThree';
import { ServiceSummaries } from './sections/ServiceSummarySection';
import { SectionOne } from './sections/SectionOne';
import { VideoResults } from './sections/SectionTwo';
import { InfoStrip_ProfessionalRestoration } from "./sections/InfoStrip_ProfessionalRestoration";
import { InfoCards } from './sections/InfoCardsSection';
import { SectionFive } from './sections/SectionFive';
import { GoogleReview } from 'types';
import { SectionFour } from './sections/SectionFour';
import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from './TitleTextBlock';
import { OFFWHITE } from 'styles/theme';
import { MiniContactUsPageForLanding } from '../ContactUs/ContactUsPage';
import { ProductSections } from './sections/ProductsSection';

export interface HomePageProps {
    galleryPhotoList: { original: string }[];
    reviews: GoogleReview[];
}
export const HomePage = ({ galleryPhotoList, reviews }: HomePageProps) => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - Home`}>
            <Header />
            <SectionOne />
            <InfoStrip_ProfessionalRestoration />
            <InfoCards />
            <VideoResults />
            <SectionThree />
            <ServiceSummaries />
            {/* <ProductSections /> */}
            <SectionFour galleryPhotoList={galleryPhotoList} />
            <SectionFive reviews={reviews} />
            <MiniContactUsPageForLanding />
        </Layout>
    );
};

export const Header = () => {
    return (
        <WideStrip backgroundColor={OFFWHITE} height="200px" className="flex flex-col">
            <TitleTextBlock style={{ color: 'black' }} gutterBottom marginTop="" variant="h4" title="Welcome to" />
            <TitleTextBlock
                style={{ color: 'black' }}
                gutterBottom
                marginTop=""
                variant="h1"
                title="JOJO Roof Improvement"
            />

            <TitleTextBlock
                gutterBottom
                style={{ fontWeight: '700', color: 'black' }}
                marginTop=""
                variant="h5"
                title="The ROOF RESTORATION company that gives you the best results and satisfaction"
            />
        </WideStrip>
    );
};
