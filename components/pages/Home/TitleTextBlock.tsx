import { TextBlock } from '@components/common/text/TextBlock';
import { TypographyProps } from '@mui/material';
import classNames from 'classnames';

export const TitleTextBlock = ({
    title,
    fontColor = 'white',
    variant = 'h3',
    className = '',
    marginTop = 'mt-16',
    containerClassName = '',
    gutterBottom = false,
    align = 'center',
}: TypographyProps & {
    title: string;
    fontColor?: string;
    variant?: TypographyProps['variant'];
    className?: string;
    marginTop?: string; // like mt-16
    containerClassName?: string;
}) => {
    return (
        <div className={classNames(marginTop, containerClassName)}>
            <TextBlock
                gutterBottom={gutterBottom}
                color={fontColor}
                align={align}
                variant={variant}
                className={className}
            >
                {title}
            </TextBlock>
        </div>
    );
};
