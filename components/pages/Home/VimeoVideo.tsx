import classNames from 'classnames';

export interface VimeoVideoProps {
    src: string; // link to vimeo video
    title: string;
    frameClassName?: string;
}
export const VimeoVideo = ({ src, title = 'Vimeo Video', frameClassName = '' }: VimeoVideoProps) => {
    return (
        <div className={classNames('w-full h-full', frameClassName)}>
            <iframe
                datatype="video/vimeo"
                src={src}
                title={title}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
            />
        </div>
    );
};
