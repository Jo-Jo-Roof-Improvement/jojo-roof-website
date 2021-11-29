import { StripBase } from '@components/common/strips/StripBase';
import React from 'react';
import { SocialMediaSection } from './SocialMediaSectionProps';
import { CheckUsOut } from './FindUsOut';
import { SocialMediaIcons } from './SocialMediaIcons';
import { CopyrightStrip } from './CopyrightStrip';
import { TextBlock } from '@components/common/text/TextBlock';

export const Footer = () => {
    return (
        <>
            <StripBase className="flex flex-col " backgroundColor="rgb(207,207,212)" height="150px">
                <SocialMediaSection>
                    <CheckUsOut />
                    <SocialMediaIcons />
                </SocialMediaSection>
                <CopyrightStrip />
                <PaulsClaim />
            </StripBase>
        </>
    );
};

export const PaulsClaim = () => {
    return (
        <div className="flex w-full mb-4 mt-4 justify-center">
            <TextBlock fontSize="10pt">
                Website built by{' '}
                <a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/paul-gradie-phd-743b8b58/">
                    Paul Gradie
                </a>
            </TextBlock>
        </div>
    );
};
