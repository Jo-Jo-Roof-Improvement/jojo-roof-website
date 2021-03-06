import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from '@components/pages/Home/TitleTextBlock';

export const ServicesSectionOne = () => {
    return (
        <WideStrip align="center" backgroundColor="white" height="250px">
            <div className="h-full flex flex-col items-center justify-center">
                <TitleTextBlock fontColor="black" title="Our Roof Improvement Services" marginTop="mt-6" />
            </div>
        </WideStrip>
    );
};
