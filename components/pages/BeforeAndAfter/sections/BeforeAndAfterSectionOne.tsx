
import { MediumStrip } from '@components/common/strips/MediumStrip';
import { TitleTextBlock } from '../../Home/TitleTextBlock';


export const BeforeAndAfterSectionOne = () => {
    return (
        <MediumStrip align="center" backgroundColor="white" height="150px">
            <div className="h-full flex flex-col items-center justify-center">
                <TitleTextBlock fontColor="black" title="Before and After Image Gallery" marginTop="" />
            </div>
        </MediumStrip>
    );
};
