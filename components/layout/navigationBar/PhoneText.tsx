import { TextBlock, TextBlockProps } from '@components/common/text/TextBlock';
import { useMediaQuery } from '@mui/material';
import classNames from 'classnames';

export interface PhoneTextProps extends TextBlockProps {
    phoneNumber: string;
    className?: string;
}
export const PhoneText = ({ phoneNumber, className, ...rest }: PhoneTextProps) => {
    const query = useMediaQuery('(min-width:600px)');

    const onClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <TextBlock
            onClick={onClick}
            variant="h5"
            className={classNames('flex flex-grow-0 align-middle text-center cursor-pointer', className)}
            {...rest}
        >
            {phoneNumber}
        </TextBlock>
    );
};
