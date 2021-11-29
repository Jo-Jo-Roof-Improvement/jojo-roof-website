import { TextBlock } from '@components/common/text/TextBlock';
import React from 'react';
import { ServiceSection } from '../ServiceSection';

export const ServicesSectionSix = () => {
    const body = (
        <>
            <TextBlock paragraph>
                Painting your roof tiles is more important that we might think. The sealer, paint or glaze provide
                protection against ultraviolet and infrared heat degradation. Indeed coating reflect sun's ray and can
                keep the temperature of your roof constant. Prolonging its lifespan. This will also prevent any future
                bacteria, moss, lichen, dirt and others natural elements to grow on the roof.
            </TextBlock>
            <TextBlock paragraph>
                On the other hand, having a resplendent, shining and definitely gorgeous roof will give you more
                happiness every day after work when you will see your roof looking like new.
            </TextBlock>
            <TextBlock paragraph>
                We are painting most of our customer roof with Dulux Acretex, the best brand of the market. Which give
                15 years guarantee !
            </TextBlock>
        </>
    );
    return (
        <ServiceSection
            title="ROOF PAINTING"
            textColor="white"
            header="DOES PAINTING YOUR ROOF TILES IS NECESSARY?"
            body={body}
            imageSrc="/images/image-3.jpg"
            backgroundColor="black"
        />
    );
};
