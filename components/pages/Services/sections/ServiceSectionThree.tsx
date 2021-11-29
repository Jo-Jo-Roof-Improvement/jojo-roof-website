import { TextBlock } from '@components/common/text/TextBlock';
import React from 'react';
import { ServiceSection } from '../ServiceSection';

export const ServiceSectionThree = () => {
    const body = (
        <>
            <TextBlock paragraph>
                Washing your roof is an important step in maintaining your home, regardless that your roof will look
                like new. You would eradicate all traces of dirt including moss, lichen, debris, and other natural
                elements.
            </TextBlock>
            <TextBlock paragraph>
                Note that when you eradicate all the bacteria growing on the roof. This will lengthen the prosperity of
                the tiles and avoid weakening them.
            </TextBlock>
            <TextBlock paragraph>
                Cleaning your roof will take a thorn out of your foot. You will feel much better and you will have more
                admiration for your home. So avoid unnecessary future expenses.
            </TextBlock>
        </>
    );
    return (
        <ServiceSection
            title="ROOF CLEANING"
            textColor="white"
            header="Why should you clean your roof?"
            body={body}
            imageSrc="/images/image-3.jpg"
            backgroundColor="black"
        />
    );
};
