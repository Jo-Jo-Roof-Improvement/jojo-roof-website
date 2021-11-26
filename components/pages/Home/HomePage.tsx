/* eslint-disable @next/next/no-img-element */
// import styles from './HomePage.module.css';
import { JoButton } from '@components/common/buttons/JoButton';
import { TextBlock } from '@components/common/text/TextBlock';
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';

const TopImage = () => {
    return (
        <div className="h-1/4">
            <img src="/images/image-1.jpg" alt="logo" className="bg-cover"/>
        </div>
    );
};

const BookNowCircle = () => {
    return (
        <div className="absolute w-full right-1/4">
            <div
                style={{ borderRadius: '50%' }}
                className="h-56 w-56 flex flex-col justify-center text-center bg-gray-400"
            >
                <TextBlock align="center" variant="h4">
                    Looking for a roof contractor?
                </TextBlock>
                <JoButton className="text-center bg-gray-700 w-1/2">Book Now</JoButton>
            </div>
        </div>
    );
};

const SectionOne = () => {
    return (
        <div className="">
            <TopImage />
            <BookNowCircle />
        </div>
    );
};

export const HomePage = () => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - Home`}>
            <SectionOne />
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
            <div>Some Test Content</div>
        </Layout>
    );
};
