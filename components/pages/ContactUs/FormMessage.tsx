import { JoTextField } from '@components/common/input/JoTextField';


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
                className: 'bg-none text-gray-400 text-2xl',
            }}
            InputProps={{
                className: 'bg-black hover:bg-black rounded-none text-white text-xl pt-8',
            }}
            inputProps={{
                style: { fontFamily: 'Source Sans Pro' },
            }}
        />
    );
};
