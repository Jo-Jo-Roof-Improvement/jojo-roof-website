import React from 'react';
import { TitleTextBlock } from '../../Home/TitleTextBlock';
import { WideStrip } from '@components/common/strips/WideStrip';
import { AdornedText } from '@components/common/text/AdornedText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { InstagramGallery } from '../InstagramGallery';


export const AboutUsSectionFour = () => {
    return (
        <WideStrip className="flex flex-col">
            <TitleTextBlock title="Our Clients" className="pb-10" />
            <InstagramGallery />
            <AdornedText
                textClassName="text-white"
                variant="h6"
                EndAdornment={<ArrowForwardIosIcon style={{ color: 'white', fontSize: '14pt' }} className="flex mt-2 ml-2" />}
                text="Check them out"
                containerClassName="pb-10" />
        </WideStrip>
    );
};
