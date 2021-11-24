import { StripBase } from '@components/common/strips/StripBase';
import React from 'react';
import { SocialMediaSection } from './SocialMediaSectionProps';
import { FindUsOut } from './FindUsOut';
import { SocialMediaIcons } from './SocialMediaIcons';
import { CopyrightStrip } from './CopyrightStrip';

export const Footer = () => {
    return (
        <>
            <StripBase backgroundColor="rgb(207,207,212)" height="150px">
                <SocialMediaSection>
                    <FindUsOut />
                    <SocialMediaIcons />
                </SocialMediaSection>
            </StripBase>
            <CopyrightStrip />
        </>
    );
};
