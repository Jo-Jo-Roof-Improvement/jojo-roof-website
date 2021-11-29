import { WideStrip } from '@components/common/strips/WideStrip';
import { Divider } from '@mui/material';
import React from 'react';
import { SuccessInfo } from "../SuccessInfo";

export const AboutUsSectionTwo = () => {
    return (
        <WideStrip
            align="center"
            height="300px"
            backgroundColor="rgb(207,207,212)"
            className="flex flex-col items-center w-full lg:flex-row"
        >
            <div className="mt-10 mb-10 pl-5 pr-5 hidden md:flex">
                <SuccessInfo
                    title="Completed Projects"
                    criticalHit="200 +"
                    text="Since we started, we have participated in the roof restoration of more than 200 homes in Australia" />
                <Divider orientation="vertical" flexItem />
                <SuccessInfo
                    title="Satisfaction Rate"
                    criticalHit="100 %"
                    text="Based on feedback received and when recommending us to their neighbours and friends." />
                <Divider orientation="vertical" flexItem />
                <SuccessInfo
                    title="Years In Service"
                    criticalHit="4 +"
                    text="Year after, we consistently deliver our best service, excellent quality, and unbeatable prices" />
            </div>
            <div className="mt-10 mb-10 pl-5 pr-5 flex md:hidden">
                <SuccessInfo
                    title="Completed Projects"
                    criticalHit="200 +"
                    text="That is solid experience. We have successfully completed over 200 roof restoration projects for homes here in Australia. " />
                <SuccessInfo
                    title="Satisfaction Rate"
                    criticalHit="100 %"
                    text="Trust in us. We have a perfect track record based on feedback we have received from our customer." />
            </div>
            <Divider orientation="horizontal" flexItem variant="middle" />
            <div className="md:hidden">
                <SuccessInfo
                    title="Years In Service"
                    criticalHit="4 +"
                    text="Consecutive years always offering our best service, with excellent quality and unbeatable prices" />
            </div>
        </WideStrip>
    );
};