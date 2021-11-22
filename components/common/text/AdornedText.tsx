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
    return (
        <div className="flex flex-col items-center">
            <div className="flex h-full justify-center align-middle" style={{ verticalAlign: 'center' }}>
                {StartAdornment && (
                    <div className="h-full" style={{ marginRight: padAdornment ? `${padAdornment}rem` : '0rem' }}>
                        {StartAdornment}
                    </div>
                )}
                <Typography style={{ verticalAlign: 'center' }} align="center" variant={variant}>
                    {text}
                </Typography>
                {EndAdornment && (
                    <div className="h-full" style={{ marginLeft: padAdornment ? `${padAdornment}rem` : '0rem' }}>
                        {EndAdornment}
                    </div>
                )}
            </div>
        </div>
    );
};
