import { ThinStrip } from '@components/common/strips/ThinStrip';
import React from 'react';
import FlareIcon from '@mui/icons-material/Flare';
import { AdornedText } from '@components/common/text/AdornedText';

export const FreeQuoteToday = () => {
    return (
        <ThinStrip backgroundColor="#CFCFD4" align="center">
            <AdornedText
                StartAdornment={<FlareIcon />}
                EndAdornment={<FlareIcon />}
                padAdornment={1}
                variant="body2"
                text="Get a Free Quote Today!"
            />
        </ThinStrip>
    );
};
