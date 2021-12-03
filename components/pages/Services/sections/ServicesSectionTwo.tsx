import { MediumStrip } from '@components/common/strips/MediumStrip';
import { TitleTextBlock } from '@components/pages/Home/TitleTextBlock';

export const ServicesSectionTwo = () => {
    return (
        <MediumStrip align="center" backgroundColor="white" height="150px" className="w-full flex-col md:flex-row">
            <TitleTextBlock
                fontColor="black"
                variant="h5"
                title="Learn about the range of high quality services we provide that will keep your roof in it's best condition"
                marginTop=""
                className="md:mr-16 md:ml-16 md:pl-16 md:pr-16 pr-4 pl-4 pb-4"
            />
        </MediumStrip>
    );
};
