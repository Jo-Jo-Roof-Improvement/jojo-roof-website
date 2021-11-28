import { StripBase } from '@components/common/strips/StripBase';
import React from 'react';
import { TextBlock } from '@components/common/text/TextBlock';

export const CopyrightStrip = () => {
    return (
        <StripBase backgroundColor="rgb(207,207,212)" height="50px">
            <TextBlock fontFamily="Source Sans Pro" variant="h6" color="black" className="pb-10">
                Copyright © 2021 Jojo Roof Improvement - All Rights Reserved.
            </TextBlock>
        </StripBase>
    );
};
