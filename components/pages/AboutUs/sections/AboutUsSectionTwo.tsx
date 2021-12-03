import { WideStrip } from '@components/common/strips/WideStrip';
import { Divider } from '@mui/material';

import { SuccessInfo } from '../SuccessInfo';

export const AboutUsSectionTwo = () => {
    return (
        <WideStrip
            maxHeight=""
            // align="center"
            height="300px"
            backgroundColor="rgb(207,207,212)"
            className="flex flex-col items-center w-full lg:flex-row lg:justify-center lg:justify-evenly"
        >
            <LargeScreenSizeLayout />
            <SmallScreenSizeLayout />
        </WideStrip>
    );
};

const LargeScreenSizeLayout = () => {
    const MarginedDivider = <Divider orientation="vertical" flexItem className="mt-10" />;
    return (
        <div className="mt-10 mb-10 pl-5 pr-5 pb-5 hidden md:flex md:justify-center">
            <SuccessInfo
                title="Completed Projects"
                criticalHit="200 +"
                text="Since starting, we have participated in the roof restoration of more than 200 homes in Australia"
            />
            {MarginedDivider}
            <SuccessInfo
                title="Satisfaction Rate"
                criticalHit="100 %"
                text="Based on feedback received and when recommending us to their neighbours and friends."
            />
            {MarginedDivider}
            <SuccessInfo
                title="Years In Service"
                criticalHit="4 +"
                text="Year after, we consistently deliver our best service, excellent quality, and unbeatable prices"
            />
        </div>
    );
};

const SmallScreenSizeLayout = () => {
    return (
        <>
            <div className="mt-10 mb-10 pl-5 pr-5 flex md:hidden">
                <SuccessInfo
                    title="Completed Projects"
                    criticalHit="200 +"
                    text="That is solid experience. We have successfully completed over 200 roof restoration projects for homes here in Australia. "
                />
            </div>
            <Divider orientation="horizontal" flexItem variant="middle" className="ml-10 mr-10 md:hidden" />
            <div className="mt-10 mb-10 pl-5 pr-5 flex md:hidden">
                <SuccessInfo
                    title="Satisfaction Rate"
                    criticalHit="100 %"
                    text="Trust in us. We have a perfect track record based on feedback we have received from our customer."
                />
            </div>
            <Divider orientation="horizontal" flexItem variant="middle" className="ml-10 mr-10 md:hidden" />
            <div className="md:hidden mb-10 mt-10">
                <SuccessInfo
                    title="Years In Service"
                    criticalHit="4 +"
                    text="Consecutive years always offering our best service, with excellent quality and unbeatable prices"
                />
            </div>
        </>
    );
};
