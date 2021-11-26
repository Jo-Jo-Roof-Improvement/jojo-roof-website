/* eslint-disable @next/next/no-img-element */
// import styles from './HomePage.module.css';
import { JoButton } from '@components/common/buttons/JoButton';
import { TextBlock } from '@components/common/text/TextBlock';
import { Layout } from '@components/layout/Layout';
import classNames from 'classnames';
import { COMPANYNAME } from 'company';

import styles from './HomePage.module.css';

//https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit
const TopImage = () => {
    return (
        <div className="flex justify-center bg-black">
            <img
                src="/images/image-1.jpg"
                alt="logo"
                className="object-fit"
                style={{ width: '100%', height: '600px', objectFit: 'cover', objectPosition: '50% 0' }}
            />
        </div>
    );
};

interface BookNowCircleProps {
    alignment: string; // tailwind style
    visibility: string; // tailwind style
}
const BookNowCircle = ({ alignment, visibility }: BookNowCircleProps) => {
    return (
        <div
            style={{ borderColor: 'black', borderWidth: '2px', backgroundColor: '#CFCFD4' }}
            className={classNames(
                'rounded-full h-72 w-72',
                ' flex flex-col justify-center text-center',
                `${alignment}`,
                `${visibility}`,
                styles.transition
            )}
        >
            <TextBlock align="center" variant="h4" className="mx-auto" style={{ textShadow: '1px 1px 2px white' }}>
                Looking for a roof contractor?
            </TextBlock>
            <JoButton
                style={{ borderRadius: '0px', backgroundColor: 'rgba(22, 22, 22, 1.0)', boxShadow: '6px 6px darkgray' }}
                className="text-center w-1/2 mx-auto mt-2 text-white text-lg "
            >
                Book Now
            </JoButton>
        </div>
    );
};

const BookNowCircleContainer = () => {
    return (
        <div className="absolute w-full bottom-0 lg:bottom-52  lg:pr-36">
            <BookNowCircle alignment="float-right" visibility="hidden lg:flex " />
            <BookNowCircle alignment="mx-auto" visibility="lg:hidden" />
        </div>
    );
};

const SectionOne = () => {
    return (
        <div style={{ height: '50%' }}>
            <TopImage />
            <BookNowCircleContainer />
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
