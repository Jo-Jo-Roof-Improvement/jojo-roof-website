import { WideStrip } from '@components/common/strips/WideStrip';
import { TextBlock } from '@components/common/text/TextBlock';

import { TitleTextBlock } from '../../Home/TitleTextBlock';
import { FullWidthImage } from '../../Home/TopImage';

export const AboutUsSectionOne = () => {
    const textblockClasses = 'flex pl-7 pr-7 pb-10 text-white text-center lg:text-left ';
    return (
        <WideStrip align="center" className="flex flex-col lg:flex-row lg:justify-evenly">
            <div className="flex lg:hidden w-full">
                <FullWidthImage
                    height=""
                    width=""
                    src="/brand-images/jojo-with-logo.png"
                    className="w-full h-auto"
                    containerClassNames=""
                />
            </div>
            <div className="flex flex-col lg:w-1/2">
                <TitleTextBlock
                    className={textblockClasses}
                    title="Precision, Punctuality and Commitment to excellence"
                    variant="h4"
                />
                <TextBlock paragraph className={textblockClasses}>
                    We are a fully-certified professionals ready to tackle anything from minor repair jobs to complex
                    and large scale construction projects.
                </TextBlock>
                <TextBlock paragraph className={textblockClasses}>
                    We understand that dealing with remodeling tasks can be pretty stressful, but we are here to take
                    the load off your shoulders. We are fueled by our commitment to excellence and go the extra mile to
                    make sure clients are fully satisfied with our work.
                </TextBlock>
                <TextBlock paragraph className={textblockClasses}>
                    Get in touch with us today for a free, no obligation consultation.
                </TextBlock>
            </div>
            <div className="hidden lg:flex h-full">
                <FullWidthImage src="/brand-images/jojo-with-logo.png" objectFit="cover" objectPosition="50% 0" width="100%" />
            </div>
        </WideStrip>
    );
};
