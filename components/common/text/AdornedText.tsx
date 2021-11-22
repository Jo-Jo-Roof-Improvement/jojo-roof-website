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
        <div className="flex flex-row justify-around h-full">
            {StartAdornment && (
                <div
                    style={{
                        verticalAlign: 'middle',
                        marginRight: padAdornment ? `${padAdornment}rem` : '0rem',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {StartAdornment}
                </div>
            )}
            <div>
                <Typography align="center" variant={variant}>
                    {text}
                </Typography>
            </div>
            {EndAdornment && (
                <div
                    style={{
                        marginLeft: padAdornment ? `${padAdornment}rem` : '0rem',
                        verticalAlign: 'middle',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {EndAdornment}
                </div>
            )}
        </div>
    );
};
