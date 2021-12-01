import { StripBase } from '@components/common/strips/StripBase';
import React from 'react';
import { SocialMediaSection } from './SocialMediaSectionProps';
import { CheckUsOut } from './CheckUsOut';
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
        <div className="flex w-full pb-4 pt-4 text-center justify-center">
            <TextBlock paddingRight="5px" align="center" fontSize="10pt">
                Website built by{'  '}
            </TextBlock>
            <a
                className="flex items-center"
                style={{ fontSize: '10pt', textDecoration: 'none', fontFamily: 'Source Sans Pro' }}
                href="https://www.linkedin.com/in/paul-gradie-phd-743b8b58/"
            >
                {'  '}Paul Gradie
            </a>
        </div>
    );
};
