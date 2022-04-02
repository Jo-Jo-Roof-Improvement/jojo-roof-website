import { Box, Card, Grid, Divider, Theme } from '@mui/material';
import cls from './TitleContent.module.scss';

export interface ITitleContent {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    children?: React.ReactNode;
}
export const TitleContent = ({ title, subtitle, children }: ITitleContent) => {
    return (
        <>
            <div className={cls.card}>
                <Grid container alignContent="center">
                    <Grid item xs={12}>
                        {title && <Box>{title}</Box>}
                    </Grid>
                    <Grid item xs={12}>
                        {subtitle && <Box>{subtitle}</Box>}
                    </Grid>
                    <Divider />
                </Grid>
            </div>
            {children && children}
        </>
    );
};
