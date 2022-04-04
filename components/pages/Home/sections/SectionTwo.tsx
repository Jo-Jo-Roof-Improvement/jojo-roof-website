import { WideStrip } from '@components/common/strips/WideStrip';

import { TitleTextBlock } from '../TitleTextBlock';
import { VideoWithTextBelow } from '../VideoWithTextBelow';

export const VideoResults = () => {
    return (
        <WideStrip align="center" maxHeight="">
            <div className="flex flex-col items-center w-full mb-5">
                <TitleTextBlock className="pl-2 pr-2 pb-6">
                    See our amazing before and after roof restoration results
                </TitleTextBlock>
                <TitleTextBlock className="pb-3">Results that last!</TitleTextBlock>
                <div className="flex flex-col md:flex-row md:w-full">
                    <VideoWithTextBelow
                        src="//player.vimeo.com/video/589829430?autoplay=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0"
                        videoTitle="Vimeo Video"
                        text="See how we can revitalise your roof"
                        buttonText="Contact Us"
                    />
                    <VideoWithTextBelow
                        src="//player.vimeo.com/video/589829548?autoplay=0&title=0&portrait=0&byline=0&badge=0"
                        videoTitle="Vimeo Video"
                        text="We take care of your roof, so you can focus on your home."
                        buttonText="Get a free quote today"
                    />
                </div>
            </div>
        </WideStrip>
    );
};
