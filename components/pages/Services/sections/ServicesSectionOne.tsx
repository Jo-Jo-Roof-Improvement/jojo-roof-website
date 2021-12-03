import { MediumStrip } from '@components/common/strips/MediumStrip';
import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from '@components/pages/Home/TitleTextBlock';

export const ServicesSectionOne = () => {
    return (
        <WideStrip align="center" backgroundColor="white" >
            <div className="h-full flex flex-col items-center justify-center">
                <TitleTextBlock fontColor="black" title="Our Roof Improvement Services" marginTop="" />
            </div>
        </WideStrip>
    );
};
