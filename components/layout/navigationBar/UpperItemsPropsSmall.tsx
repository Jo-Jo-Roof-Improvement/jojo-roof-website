import React from 'react';
import { PhoneText } from './PhoneTextProps';

interface UpperItemsPropsSmall {
    menuIcon: React.ReactNode;
    phoneNumber: string;
}
export const UpperItemsSmall = ({ menuIcon, phoneNumber }: UpperItemsPropsSmall) => {
    return (
        <div className="flex flex-row justify-between mb-4">
            <div>{menuIcon}</div>
            <PhoneText phoneNumber={phoneNumber} />
            <div className="flex invisible">Empty</div>
        </div>
    );
};
