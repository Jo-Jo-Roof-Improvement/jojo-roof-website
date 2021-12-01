import React from 'react';
import { MediumStrip } from '@components/common/strips/MediumStrip';
import { TextBlock } from '@components/common/text/TextBlock';

export const BeforeAndAfterSectionTwo = () => {
    return (
        <MediumStrip align="center" backgroundColor="white" height="150px">
            <div className="h-full w-2/3 flex flex-col items-center justify-center text-center">
                <TextBlock align="center" paragraph variant="h4" gutterBottom color="black" className="pb-5">
                    <i>&ldquo;A picture is worth a thousand words&rdquo;</i>
                </TextBlock>
                <TextBlock variant="body1" paragraph gutterBottom className="pb-5">
                    Below you will find a selection of before and after photos that represent some of the work we can do
                    for you. This is a great way to see what sorts of things you can do to service your home&apos;s
                    roof.
                </TextBlock>
                <TextBlock variant="body1" className="pb-10">
                    Take your time, explore the photos and see what you can do to improve your roof.
                </TextBlock>
                <TextBlock variant="body1" className="pb-10">
                    <i>If you have any question or special requests, please get in touch!</i>
                </TextBlock>
            </div>
        </MediumStrip>
    );
};
