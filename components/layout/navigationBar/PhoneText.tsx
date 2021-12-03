import { TextBlock, TextBlockProps } from '@components/common/text/TextBlock';
import classNames from 'classnames';


export interface PhoneTextProps extends TextBlockProps {
    phoneNumber: string;
    className?: string;
}
export const PhoneText = ({ phoneNumber, className, ...rest }: PhoneTextProps) => {
    return (
        <TextBlock
            variant="h5"
            className={classNames('flex flex-grow-0 align-middle text-center', className)}
            {...rest}
        >
            {phoneNumber}
        </TextBlock>
    );
};
