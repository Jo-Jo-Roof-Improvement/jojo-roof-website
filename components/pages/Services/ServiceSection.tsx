import { WideStrip } from '@components/common/strips/WideStrip';
import { TextBlock } from '@components/common/text/TextBlock';
import { TypographyProps } from '@mui/material';

import { TitleTextBlock } from '../Home/TitleTextBlock';
import { FullWidthImage } from '../Home/TopImage';

export interface ServiceSectionProps {
    title: string;
    textColor: string;
    header: string;
    body: React.ReactNode;
    imageSrc: string;
    backgroundColor: string;
    variant?: TypographyProps['variant'];
}
export const ServiceSection = ({
    title,
    textColor,
    header,
    body,
    imageSrc,
    backgroundColor,
    variant = 'h5',
}: ServiceSectionProps) => {
    return (
        <WideStrip maxHeight="" backgroundColor={backgroundColor} className="flex flex-col pb-10 pt-10">
            <TitleTextBlock
                className="text-left"
                fontColor={textColor}
                title={title}
                marginTop=""
                containerClassName="pt-10 md:pt-0 md: pb-5"
            />
            <div className="flex flex-col md:flex-row pl-8 pr-8 pt-10 items-center">
                <FullWidthImage src={imageSrc} height="250px" objectPosition="50%" objectFit="cover" />
                <div className="pl-8 pr-8 mt-10">
                    <TitleTextBlock
                        variant={variant}
                        align="right"
                        className="text-left pb-3"
                        fontColor={textColor}
                        title={header}
                        marginTop=""
                    />
                    <TextBlock color={textColor} paragraph>
                        {body}
                    </TextBlock>
                </div>
            </div>
        </WideStrip>
    );
};
