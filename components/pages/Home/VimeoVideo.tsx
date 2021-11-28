
export interface VimeoVideoProps {
    src: string; // link to vimeo video
    title: string;
}
export const VimeoVideo = ({ src, title = 'Vimeo Video' }: VimeoVideoProps) => {
    return (
        <div className="w-96 h-auto mt-10 mb-10">
            <iframe
                datatype="video/vimeo"
                src={src}
                title={title}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen />
        </div>
    );
};