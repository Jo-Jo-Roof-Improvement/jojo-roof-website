import { MediumStrip } from '@components/common/strips/MediumStrip';
import { TextBlock } from '@components/common/text/TextBlock';

export const GallerySectionTwo = () => {
    return (
        <MediumStrip align="center" backgroundColor="white" height="150px">
            <div className="h-full w-2/3 flex flex-col items-center justify-center text-center">
                <TextBlock variant="body1" paragraph gutterBottom className="pb-5">
                    Below you will find a selection of before and after photos. These photos will show you the
                    differences between serviced and unserviced roofs.
                </TextBlock>
                <TextBlock variant="body1" className="pb-10">
                    Take your time, explore the photos, and behold the difference that maintenance can make to your
                    roof.
                </TextBlock>
                <TextBlock variant="body1" className="pb-10">
                    <i>If you have any questions or special requests, please do not hesitate to get in touch</i>
                </TextBlock>
            </div>
        </MediumStrip>
    );
};
