import { JoTextField } from '@components/common/input/JoTextField';
import styles from './ContactUsPage.module.css';

export const FormMessage = ({
    value,
    onChange,
    error,
}: {
    error: boolean;
    value: string;
    onChange(value: string): void;
}) => {
    return (
        <JoTextField
            type="text"
            error={error}
            required
            multiline
            style={{ fontFamily: 'Source Sans Pro' }}
            rows={7}
            variant="filled"
            fullWidth
            label="Message"
            onChange={(e) => {
                e.preventDefault();
                onChange(e.target.value);
            }}
            value={value}
            size="medium"
            InputLabelProps={{
                shrink: true,
                // className: styles.inputlabelprops,
                // className: 'bg-none text-gray-400 text-2xl',
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
            }}
            InputProps={{
                style: {
                    fontFamily: 'Source Sans Pro',
                    fontSize: '1.5rem',
                    paddingTop: '2rem',
                    borderRadius: 'none',
                    color: 'white',
                    backgroundColor: 'black',
                },
                // className: styles.messageInputProps
                // className: 'bg-black hover:bg-black rounded-none text-white text-xl pt-8',
            }}
            inputProps={{
                style: { fontFamily: 'Source Sans Pro' },
            }}
        />
    );
};
