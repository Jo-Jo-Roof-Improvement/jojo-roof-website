import { TextBlock } from '@components/common/text/TextBlock';
import { TypographyVariant } from '@mui/material';

import { TitleTextBlock } from './TitleTextBlock';

export interface TextBlockSectionProps {
    title: React.ReactNode;
    text: React.ReactNode;
    titleVariant?: TypographyVariant;
    textVariant?: TypographyVariant;
    style?: React.CSSProperties;
    marginTop?: string; // like mt-16
}
export const TextBlockSection = ({
    title,
    text,
    titleVariant = 'h5',
    textVariant,
    style,
    marginTop,
}: TextBlockSectionProps) => {
    return (
        <div style={style} className="flex flex-col items-center w-full h-56">
            <TitleTextBlock marginTop={marginTop} fontColor="black" variant={titleVariant} className="pb-2">
                {title}
            </TitleTextBlock>
            <TextBlock paragraph color="black" align="center" variant={textVariant}>
                {text}
            </TextBlock>
        </div>
    );
};
