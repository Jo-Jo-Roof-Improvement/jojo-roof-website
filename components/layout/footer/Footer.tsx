import { StripBase } from '@components/common/strips/StripBase';

import { SocialMediaSection } from './SocialMediaSectionProps';
import { CheckUsOut } from './CheckUsOut';
import { SocialMediaIcons } from './SocialMediaIcons';
import { CopyrightStrip } from './CopyrightStrip';
import { Claims } from './PaulsClaim';
import { OFFWHITE } from 'styles/theme';

export const Footer = () => {
    return (
        <>
            <StripBase className="flex flex-col pt-5" backgroundColor={OFFWHITE} height="150px" maxHeight="">
                <SocialMediaSection>
                    <CheckUsOut />
                    <SocialMediaIcons />
                </SocialMediaSection>
                <CopyrightStrip />
                <Claims />
            </StripBase>
        </>
    );
};


