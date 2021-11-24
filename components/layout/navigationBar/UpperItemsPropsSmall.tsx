import { TextBlock } from '@components/common/text/TextBlock';
import React from 'react';

interface UpperItemsPropsSmall {
    menuIcon: React.ReactNode;
    phoneNumber: string;
}
export const UpperItemsSmall = ({ menuIcon, phoneNumber }: UpperItemsPropsSmall) => {
    return (
        <div className="flex flex-row justify-between mb-4">
            <div>{menuIcon}</div>
            <TextBlock variant="h5" className={'flex flex-grow-0 align-middle text-center'}>
                {phoneNumber}
            </TextBlock>
            <div className="flex invisible">Empty</div>
        </div>
    );
};
