import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

export type JoTextField = TextFieldProps & {};
export const JoTextField = ({ ...rest }: JoTextField) => {
    return <TextField {...rest} />;
};
