import { JoTextField } from '@components/common/input/JoTextField';
import { InputBaseComponentProps, InputLabelProps, TextFieldProps } from '@mui/material';
import styles from './ContactUsPage.module.css';

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
            style={{ fontFamily: 'Source Sans Pro', paddingBottom: "0.5rem" }}
            rows={rows}
            variant="filled"
            fullWidth
            className={styles.jotextfield}
            label={label}
            onChange={(e) => {
                e.preventDefault();
                onChange(e.target.value);
            }}
            value={value}
            size="medium"
            InputLabelProps={{
                shrink: true,
                // className: styles.inputlabelprops,
                style: {
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    textAlign: 'left',
                    backgroundColor: 'black',
                    fontFamily: 'Source Sans Pro',
                    strokeOpacity: 1,
                    color: 'rgba(156, 163, 175, var(--tw-text-opacity))',
                    background: 'none',
                },
                ...InputLabelProps,
            }}
            InputProps={{
                style: {
                    fontFamily: 'Source Sans Pro',
                    fontSize: '16pt',
                    paddingTop: '0.5rem',
                    borderRadius: 'none',
                    color: 'white',
                    backgroundColor: 'black',
                },
            }}
            inputProps={{
                style: { fontFamily: 'Source Sans Pro' },
                ...inputProps,
            }}
        />
    );
};
