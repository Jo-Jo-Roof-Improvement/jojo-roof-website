/* eslint-disable @next/next/no-img-element */
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';

import { AboutUsSectionTwo } from './sections/AboutUsSectionTwo';
import { AboutUsSectionOne } from './sections/AboutUsSectionOne';
import { GoogleReview } from 'types';
import { AboutUsSectionThree } from './sections/AboutUsSectionThree';
import { AboutUsSectionFour } from './sections/AboutUsSectionFour';
import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from '../Home/TitleTextBlock';
import { VideoWithTextBelow } from '../Home/VideoWithTextBelow';
import { TextBlock } from '@components/common/text/TextBlock';

import cls from './AboutUsPage.module.scss';
import { VimeoVideo } from '../Home/VimeoVideo';

export const AboutUsPage = ({ reviews }: { reviews: GoogleReview[] }) => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - About Us`}>
            <VideoDemonstration />
            <AboutUsSectionTwo />
            <AboutUsSectionThree reviews={reviews} />
            <AboutUsSectionFour />
        </Layout>
    );
};

export const VideoDemonstration = () => {
    return (
        <WideStrip align="center" maxHeight="">
            <div className="flex flex-col items-center w-full pl-3 pr-3">
                <TitleTextBlock className="pl-2 pr-2 pb-6">
                    PRECISION, PUNCTUALITY AND COMMITMENT TO EXCELLENCE
                </TitleTextBlock>
                <div className="flex flex-col md:flex-row md:w-full items-center">
                    <div className="w-full md:w-1/2 items-center h-full">
                        <div className="mb-4 lg:mb-5 w-full h-72 lg:h-96 p-4 mr-2 ml-2">
                            <VimeoVideo
                                src={
                                    '//player.vimeo.com/video/695347285?autoplay=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0'
                                }
                                title={'Vimeo Video'}
                                frameClassName=""
                            />
                        </div>
                    </div>
                    <div className="h-full w-full md:w-1/2 flex flex-col items-start text-center">
                        <TextBlock className="text" paragraph color="white">
                            We are a fully-certified professionals ready to tackle anything from complex and large scale
                            construction and roof restoration projects to minor roof repair jobs.
                        </TextBlock>
                        <TextBlock paragraph color="white">
                            We are fueled by our commitment to excellence and go the extra mile to make sure clients are
                            fully satisfied with our work.
                        </TextBlock>
                        <TextBlock paragraph color="white" variant="h4">
                            Get in touch with us today for a free consultation in Melbourne.
                        </TextBlock>
                    </div>
                </div>
            </div>
        </WideStrip>
    );
};
