import { TextBlock } from '@components/common/text/TextBlock';
import React from 'react';


export interface PhoneTextProps {
    phoneNumber: string;
}
export const PhoneText = ({ phoneNumber }: PhoneTextProps) => {
    return (
        <TextBlock variant="h5" className={'flex flex-grow-0 align-middle text-center'}>
            {phoneNumber}
        </TextBlock>
    );
};
