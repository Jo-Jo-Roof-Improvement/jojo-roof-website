import React from 'react';
import { ServiceSection } from '../ServiceSection';
import { TextBlock } from '@components/common/text/TextBlock';

export const ServicesSectionSeven = () => {
    const body = (
        <>
            <TextBlock paragraph>
                A valley is the place where two major roofs meet or where the roof&apos;s direction changes. Made with
                zinc or colorbond metal. Valleys leads the water to the gutters.
            </TextBlock>
            <TextBlock paragraph>
                It is important to replace the valleys when they start to get rusted. Indeed after a while, the rusted
                penetrating will pierce the metal and make little holes. At this point, the water will definitely
                penetrate inside your roof and start to damage the insulation and the plaster.
            </TextBlock>
            <TextBlock paragraph>
                The storm seal is a bitumen-coated foam product that repels water, prevents pests from accessing roof
                cavity areas, and keeps leaves from accumulating. It stand between the cut tiles and the valley. In
                fact, installing this product is a cheaper way to maintain your roof because it save your from rebedding
                and repointing your valley.
            </TextBlock>
        </>
    );
    return (
        <ServiceSection
            title="Replace Valley and Install Storm seal"
            textColor="white"
            header="WHAT ARE VALLEYS AND STORM SEAL?"
            body={body}
            imageSrc="/services/seal.png"
            backgroundColor="rgb(22,22,22)"
        />
    );
};
