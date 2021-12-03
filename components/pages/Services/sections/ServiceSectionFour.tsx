import { TextBlock } from '@components/common/text/TextBlock';

import { ServiceSection } from '../ServiceSection';

export const ServiceSectionFour = () => {
    const body = (
        <>
            <TextBlock paragraph>
                Repointing your roof is essential as you need to improve the waterproofing of your home, it is a layer
                of flexible cement applied to the mortar base which is located below your ridges capping tiles. Indeed
                the composition of the cement is mixed with glue which makes the component more flexible without leaving
                a crack.
            </TextBlock>
            <TextBlock paragraph>
                By applying this new coat, you will allow the structure inside to remain intact. If you don&apos;t, with age
                the mortar will break down and slide off the tiles, and this will be a bigger problem because at this
                time, you will have to repair the base &ldquo;rebedding&rsquo; and will cost you double or triple the price.
            </TextBlock>
            <TextBlock paragraph>
                Take care of your roof and don&apos;t hesitate to put the price on small maintenance rather than waiting and
                spending your saving on a more complex process. Note that a well done repointing can take up to 15-20
                years before cracking again.
            </TextBlock>
        </>
    );
    return (
        <ServiceSection
            title="REPOINTING"
            textColor="white"
            header="What is repointing? And why should I do it?"
            body={body}
            imageSrc="/services/repointing.jpg"
            backgroundColor="rgb(22,22,22)"
        />
    );
};
