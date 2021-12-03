import { JoList } from '@components/common/lists/JoList';
import { JoListItem } from '@components/common/lists/JoListItem';
import { TextBlock } from '@components/common/text/TextBlock';

import { ServiceSection } from '../ServiceSection';

export const ServiceSectionFive = () => {
    const listItems = [
        'High pressure cleaning of the moss and others bacteria which grow slowly but surely on the tiles.',
        'Repointing all the ridges capping, valleys and gable to seal and prevent the water to penetratinginside.',
        'Seal and paint the tiles to prevent any future bacteria to grow on your roof.',
    ];

    const body = (
        <>
            <TextBlock paragraph>
                Rebedding is removing the old mortar in the ridge capping to replace it with a new mortar base (sand mix
                with cement). The process is necessary when the old mortar is sliding off the ridges capping, valleys or
                even gable.
            </TextBlock>
            <TextBlock paragraph>
                To avoid this to happen, it is important to maintain your roof in a good condition by restoring it with:
            </TextBlock>
            <JoList>
                {listItems.map((item, index) => (
                    <div className="flex flex-row" key={index}>
                        <span className="pr-3">{' - '}</span>
                        <JoListItem key={index}>{item}</JoListItem>
                    </div>
                ))}
            </JoList>
            <TextBlock paragraph>
                Rebbeding your roof will also give you a long term maintenance lasting at least 20-25 years. Note that
                this process may cost you a lot more than simply maintaining your roof at the right time.
            </TextBlock>
        </>
    );
    return (
        <ServiceSection
            title="REBEDDING"
            textColor="black"
            header="WHEN DO WE HAVE TO REBEDDING THE RIDGES CAPPING ?"
            body={body}
            imageSrc="/services/rebedding.jpg"
            backgroundColor="rgb(207,207,212)"
        />
    );
};
