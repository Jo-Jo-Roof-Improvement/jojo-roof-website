import { JoTextField } from '@components/common/input/JoTextField';
import { InputBaseComponentProps, InputLabelProps, TextFieldProps } from '@mui/material';
import React from 'react';

export const FormItem = ({
    value,
    label,
    onChange,
    rows = 1,
    required = true,
    inputProps = {},
    InputLabelProps = {},
    error = false,
    type = 'text',
}: {
    rows?: number | string;
    onChange(value: string): void;
    value: string;
    label: string;
    required?: boolean;
    inputProps?: InputBaseComponentProps;
    InputLabelProps?: InputLabelProps;
    error?: boolean;
    type?: TextFieldProps['type'];
}) => {
    return (
        <JoTextField
            type={type}
            error={error}
            required={required}
            multiline={rows > 1}
            style={{ fontFamily: 'Source Sans Pro' }}
            rows={rows}
            variant="filled"
            fullWidth
            className="pb-2"
            label={label}
            onChange={(e) => {
                e.preventDefault();
                onChange(e.target.value);
            }}
            value={value}
            size="medium"
            InputLabelProps={{
                shrink: true,
                className: 'text-gray-400 bg-none text-2xl',
                style: {
                    fontSize: '16pt',
                    textAlign: 'left',
                },
                ...InputLabelProps,
            }}
            InputProps={{
                className: 'bg-black hover:bg-black rounded-none text-white text-xl pt-2',
            }}
            inputProps={{
                style: { fontFamily: 'Source Sans Pro' },
                ...inputProps,
            }}
        />
    );
};
