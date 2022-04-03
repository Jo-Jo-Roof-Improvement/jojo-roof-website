import { StripBase } from '@components/common/strips/StripBase';

import { TextBlock } from '@components/common/text/TextBlock';
import { OFFWHITE } from 'styles/theme';

export const CopyrightStrip = () => {
    return (
        <StripBase className="flex flex-col" backgroundColor={OFFWHITE} height="50px">
            <TextBlock align="center" fontFamily="Source Sans Pro" variant="h6" color="black" className="pb-10">
                Copyright © 2021 Jojo Roof Improvement
            </TextBlock>
            <TextBlock align="center" fontFamily="Source Sans Pro" variant="h6" color="black" className="pb-10">
                All Rights Reserved
            </TextBlock>
        </StripBase>
    );
};
