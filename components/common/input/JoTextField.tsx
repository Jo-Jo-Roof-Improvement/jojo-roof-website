import { TextField, TextFieldProps } from '@mui/material';


export type JoTextField = TextFieldProps & {};
export const JoTextField = ({ ...rest }: JoTextField) => {
    return <TextField {...rest} />;
};
