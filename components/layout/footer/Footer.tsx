import { StripBase } from '@components/common/strips/StripBase';

import { SocialMediaSection } from './SocialMediaSectionProps';
import { CheckUsOut } from './CheckUsOut';
import { SocialMediaIcons } from './SocialMediaIcons';
import { CopyrightStrip } from './CopyrightStrip';
import { PaulsClaim } from './PaulsClaim';

export const Footer = () => {
    return (
        <>
            <StripBase className="flex flex-col pt-5" backgroundColor="rgb(207,207,212)" height="150px" maxHeight="">
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


