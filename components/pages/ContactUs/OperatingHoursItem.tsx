import { TextBlock } from '@components/common/text/TextBlock';
import React from 'react';
import { JoListItem } from '@components/common/lists/JoListItem';
import { Grid } from '@mui/material';

export const OperatingHoursItem = ({ item }: { item: { day: string; hours: string; }; }) => {
    return (
        <JoListItem>
            <Grid container>
                <Grid item xs={6}>
                    <TextBlock className="text-gray-400" variant="h6">
                        {item.day}
                    </TextBlock>
                </Grid>
                <Grid item xs={6}>
                    <TextBlock className="text-gray-400" variant="h6">
                        {item.hours}
                    </TextBlock>
                </Grid>
            </Grid>
        </JoListItem>
    );
};
