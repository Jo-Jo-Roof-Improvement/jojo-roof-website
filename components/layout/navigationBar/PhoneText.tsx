import { TextBlock, TextBlockProps } from '@components/common/text/TextBlock';
import React from 'react';

export interface PhoneTextProps extends TextBlockProps {
    phoneNumber: string;
}
export const PhoneText = ({ phoneNumber, ...rest }: PhoneTextProps) => {
    return (
        <TextBlock variant="h5" className={'flex flex-grow-0 align-middle text-center'} {...rest}>
            {phoneNumber}
        </TextBlock>
    );
};
