import { TextBlock } from '@components/common/text/TextBlock';
import { TypographyProps } from '@mui/material';

export const TitleTextBlock = ({
    title,
    fontColor = 'white',
    variant = 'h3',
    className = '',
}: {
    title: string;
    fontColor?: string;
    variant?: TypographyProps['variant'];
    className?: string;
}) => {
    return (
        <div className="mt-16">
            <TextBlock color={fontColor} align="center" variant={variant} className={className}>
                {title}
            </TextBlock>
        </div>
    );
};
