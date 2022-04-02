import { ThinStrip } from '@components/common/strips/ThinStrip';

import FlareIcon from '@mui/icons-material/Flare';
import { AdornedText } from '@components/common/text/AdornedText';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';

export const FreeQuoteToday = forwardRef<HTMLDivElement, {}>(() => {
    const router = useRouter();
    return (
        <ThinStrip backgroundColor="#191921" align="center">
            <AdornedText
                textClassName="text-white"
                fontVariant="secondary"
                StartAdornment={<FlareIcon style={{ color: '#E5E39B' }} />}
                EndAdornment={<FlareIcon style={{ color: '#E5E39B' }} />}
                padAdornment={1}
                variant="body2"
                text="Get a Free Quote Today!"
                onClick={() => router.push('/contact-us')}
            />
        </ThinStrip>
    );
});

FreeQuoteToday.displayName = 'FreeQuoteToday';
