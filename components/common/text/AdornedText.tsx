import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import classNames from 'classnames';
import { PRIMARY_FONT, SECONDARY_FONT } from 'styles/theme';

export interface AdornedText {
    text?: string;
    StartAdornment?: React.ReactNode;
    EndAdornment?: React.ReactNode;
    variant?: Variant;
    padAdornment?: number;
    textClassName?: string;
    containerClassName?: string;
    fontVariant?: 'primary' | 'secondary';
    onClick?: () => void;
}

export const AdornedText = ({
    text,
    variant = 'body1',
    fontVariant = 'primary',
    StartAdornment,
    EndAdornment,
    padAdornment,
    textClassName,
    containerClassName,
    onClick,
}: AdornedText) => {
    const adornmentStyle = {
        verticalAlign: 'middle',
        marginRight: padAdornment ? `${padAdornment}rem` : '0rem',
        marginLeft: padAdornment ? `${padAdornment}rem` : '0rem',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
    };

    return (
        <div
            className={classNames('flex flex-row justify-around h-full', containerClassName, {
                'cursor-pointer': onClick !== undefined,
            })}
            onClick={onClick}
        >
            {StartAdornment && <div style={adornmentStyle}>{StartAdornment}</div>}
            <Typography
                fontFamily={fontVariant === 'primary' ? PRIMARY_FONT : SECONDARY_FONT}
                justifyItems="center"
                justifyContent="middle"
                className={classNames('pt-1', textClassName)}
                alignItems="middle"
                variant={variant}
            >
                {text}
            </Typography>
            {EndAdornment && <div style={adornmentStyle}>{EndAdornment}</div>}
        </div>
    );
};
