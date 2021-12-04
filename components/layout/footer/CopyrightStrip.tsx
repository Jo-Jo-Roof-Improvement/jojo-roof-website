import { StripBase } from '@components/common/strips/StripBase';

import { TextBlock } from '@components/common/text/TextBlock';

export const CopyrightStrip = () => {
    return (
        <StripBase className="flex flex-col" backgroundColor="rgb(207,207,212)" height="50px">
            <TextBlock align="center" fontFamily="Source Sans Pro" variant="h6" color="black" className="pb-10">
                Copyright © 2021 Jojo Roof Improvement
            </TextBlock>
            <TextBlock align="center" fontFamily="Source Sans Pro" variant="h6" color="black" className="pb-10">
                All Rights Reserved
            </TextBlock>
        </StripBase>
    );
};
