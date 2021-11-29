import React from 'react';
import { MediumStrip } from '@components/common/strips/MediumStrip';
import { TextBlock } from '@components/common/text/TextBlock';


export const GallerySectionTwo = () => {
    return (
        <MediumStrip align="center" backgroundColor="white" height="150px">
            <div className="h-full flex flex-col items-center justify-center">
                <TextBlock paragraph gutterBottom color="black">
                    Browse this page to see examples of the sorts of restoration work you can have done on your roof.
                </TextBlock>
                <TextBlock variant="body1" paragraph gutterBottom>
                    There is much to see here. Please, take your time and have a look around. What you learn could end
                    up saving you thousands of dollars in the future.
                </TextBlock>
                <TextBlock variant="body1">
                    <i>ANY QUESTIONS OR SPECIAL REQUESTS DROP US A LINE</i>
                </TextBlock>
            </div>
        </MediumStrip>
    );
};
