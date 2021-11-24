import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import styles from './AdornedText.module.css';

export interface AdornedText {
    text: string;
    StartAdornment?: React.ReactNode;
    EndAdornment?: React.ReactNode;
    variant?: Variant;
    padAdornment?: number;
}

export const AdornedText = ({ text, variant = 'body1', StartAdornment, EndAdornment, padAdornment }: AdornedText) => {
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
        <div className="flex flex-row justify-around h-full">
            {StartAdornment && <div style={adornmentStyle}>{StartAdornment}</div>}
            <div>
                <Typography justifyItems="center" alignItems="middle" variant={variant}>
                    {text}
                </Typography>
            </div>
            {EndAdornment && <div style={adornmentStyle}>{EndAdornment}</div>}
        </div>
    );
};
