
import { TitleTextBlock } from '../../Home/TitleTextBlock';
import { WideStrip } from '@components/common/strips/WideStrip';
import { AdornedText } from '@components/common/text/AdornedText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { InstagramGallery } from '../InstagramGallery';
import { Link } from '@mui/material';

export const AboutUsSectionFour = () => {
    return (
        <WideStrip className="flex flex-col" maxHeight="">
            <TitleTextBlock title="Our Clients" className="pb-10" />
            <div className="w-2/3 mb-5">
                <InstagramGallery />
            </div>
            <Link href="">
                <AdornedText
                    textClassName="text-white"
                    variant="h6"
                    EndAdornment={
                        <ArrowForwardIosIcon style={{ color: 'white', fontSize: '14pt' }} className="flex mt-2 ml-2" />
                    }
                    text="Check them out"
                    containerClassName="pb-10"
                />
            </Link>
        </WideStrip>
    );
};
