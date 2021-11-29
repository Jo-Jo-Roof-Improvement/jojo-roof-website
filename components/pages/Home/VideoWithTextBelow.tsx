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
        <div className={classNames('flex flex-col items-center justify-evenly w-full mr-4 ml-4')}>
            <VimeoVideo src={src} title={videoTitle} />
            <TextBlock align="center" color="white" paragraph>
                {text}
            </TextBlock>
            <TextBlock align="center" color="white" paragraph>
                {buttonText}
            </TextBlock>
        </div>
    );
};
