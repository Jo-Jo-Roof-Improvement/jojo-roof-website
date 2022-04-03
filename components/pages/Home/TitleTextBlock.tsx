import { TextBlock } from '@components/common/text/TextBlock';
import { TypographyProps } from '@mui/material';
import classNames from 'classnames';

export const TitleTextBlock = ({
    children,
    title,
    fontColor = 'white',
    variant = 'h3',
    className = '',
    marginTop = 'mt-16',
    containerClassName = '',
    gutterBottom = false,
    align = 'center',
    style = {},
}: TypographyProps & {
    title?: React.ReactNode;
    children?: React.ReactNode;
    fontColor?: string;
    variant?: TypographyProps['variant'];
    className?: string;
    marginTop?: string; // like mt-16
    containerClassName?: string;
    style?: React.CSSProperties;
}) => {
    return (
        <div className={classNames(marginTop, containerClassName)}>
            <TextBlock
                style={style}
                gutterBottom={gutterBottom}
                color={fontColor}
                align={align}
                variant={variant}
                className={className}
            >
                {title}
                {children}
            </TextBlock>
        </div>
    );
};
