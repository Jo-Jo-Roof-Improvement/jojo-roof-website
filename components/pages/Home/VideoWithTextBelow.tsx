import { TextBlock } from '@components/common/text/TextBlock';
import classNames from 'classnames';
import { VimeoVideo } from './VimeoVideo';

export interface VideoWithTextBelowProps {
    src: string;
    videoTitle: string;
    text: string;
    buttonText: string;
}

export const VideoWithTextBelow = ({ src, videoTitle, text, buttonText }: VideoWithTextBelowProps) => {
    return (
        <div className={classNames('flex flex-col justify-start w-full pr-4 pl-4 mb-5')}>
            <div className="mb-4 lg:mb-5 w-full h-72 lg:h-96">
                <VimeoVideo src={src} title={videoTitle} frameClassName="" />
            </div>
            <TextBlock align="center" color="white" variant="h5" paragraph>
                {text}
            </TextBlock>
            <TextBlock align="center" color="white" paragraph>
                {buttonText}
            </TextBlock>
        </div>
    );
};
