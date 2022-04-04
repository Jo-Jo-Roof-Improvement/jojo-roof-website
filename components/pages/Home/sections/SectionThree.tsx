import { WideStrip } from '@components/common/strips/WideStrip';
import { OFFWHITE } from 'styles/theme';

import { TextBlockSection } from '../TextBlockSection';
import { TitleTextBlock } from '../TitleTextBlock';
import { FullWidthImage } from '../TopImage';

export const SectionThree = () => {
    return (
        <WideStrip align="center" maxHeight="" backgroundColor={OFFWHITE} className="flex flex-col">
            <TitleTextBlock
                className="pt-10"
                marginTop=""
                variant="h2"
                fontColor="black"
                title="We Deliver Top Quality at the Best Prices"
            />
            <div className="flex flex-col items-center w-full lg:flex-row">
                <div className="flex md:w-full lg:hidden">
                    <FullWidthImage src="/images/image-2-cropped.jpg" objectPosition="20% 0" />
                </div>
                <div className="pl-5 pr-5 flex flex-col items-center md:w-3/4 pb-10">
                    <div className="w-full">
                        <TextBlockSection
                            title="Perfect Installs"
                            text="Your roof is your home's main defense against the elements. Let us walk you through the options that will fit your needs and once you feel comfortable with your choice, we will handle the complete restoration."
                        />
                        <TextBlockSection
                            title="Reliable Updates"
                            text="If you're looking to update or upgrade your roof, we've got you covered. Book a free consultation to discuss our  different types of roofing restoration and environmentally friendly options!"
                        />
                        <TextBlockSection
                            title="Upkeep & Repair"
                            text="Age and environmental factors can wreak havoc on your roof. Ignoring problems for too long can cause headaches down the road. Start with a free inspection today!"
                        />
                    </div>
                </div>
                <div className="hidden lg:flex m-10">
                    <FullWidthImage src="/images/image-2-cropped.jpg" objectPosition="20% 0" />
                </div>
            </div>
        </WideStrip>
    );
};
