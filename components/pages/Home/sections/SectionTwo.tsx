import { WideStrip } from '@components/common/strips/WideStrip';
import { TextBlock } from '@components/common/text/TextBlock';
import { TextBlockSection } from '../TextBlockSection';

import { TitleTextBlock } from '../TitleTextBlock';
import { VideoWithTextBelow } from '../VideoWithTextBelow';

export const SectionTwo = () => {
    return (
        <WideStrip align="center" maxHeight="">
            <div className="flex flex-col items-center w-full mb-5">
                <TextBlockSection title="Roof Restoration at unbeatable price and quality!" text="wow" />
                <TextBlock>
                    Say stop to the chronic stress ! We Re-Roof or Restore so that you can live in a peacefully home
                    without worrying that it would leak, crack, flake or peel !
                </TextBlock>
                <TextBlock>
                    With JOJO Roof Improvement you’ll get your a beautiful ROOF RESTORATION that last and bring it to
                    its brand new look because your roof is your home’s main defense and it’s important to maintain it
                    in a good condition.
                </TextBlock>
                <TextBlock>ROOF RESTORATION 10 YEARS warranty</TextBlock>
                <TextBlock>
                    You are worried about tradies scam that leave the job to a complete mess ? With us, we’ve got you
                    covered for 10 YEARS on WORKMANSHIP and material for a complete ROOF RESTORATION We ensure to give
                    you the best services for the best satisfaction
                </TextBlock>
                <TextBlock>
                    Why would you choose us ? No scam, no subcontractors, our team of qualified roofers will take care
                    of your roof without any stress during the progress, we are here to answer your question and
                    reassure you for a peace of mind. We give you update, pictures before and after and explain the
                    steps of our process, we treat your home as if it was our.
                </TextBlock>

                <TitleTextBlock title="Your roof is your home's main defense" className="pl-2 pr-2 pb-6" />
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
