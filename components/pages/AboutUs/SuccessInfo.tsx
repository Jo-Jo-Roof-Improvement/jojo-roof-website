import { TextBlock } from '@components/common/text/TextBlock';

import { TitleTextBlock } from '../Home/TitleTextBlock';


export const SuccessInfo = ({ title, criticalHit, text }: { title: string; criticalHit: string; text: string; }) => {
    return (
        <div className="ml-4 mr-4 pl-4 pr-4">
            <TitleTextBlock marginTop="mt-6" variant="h5" title={title} fontColor="black" className="pb-10" />
            <TextBlock align="center" variant="h4" fontWeight="600" className="pb-10">
                {criticalHit}
            </TextBlock>
            <TextBlock align="center">{text}</TextBlock>
        </div>
    );
};
