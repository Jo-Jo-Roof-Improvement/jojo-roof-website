import cls from './BlogPreviewCard.module.scss';
import Image from 'next/image';
import { TextBlock } from '@components/common/text/TextBlock';

export const BlogAuthorAndDataDetails = ({
    author,
    author_img,
    dateFormatted,
    readingTime,
}: {
    author: string;
    author_img: string;
    dateFormatted: string;
    readingTime: string;
}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}
        >
            <div
                style={{
                    borderRadius: '50%',
                    position: 'relative',
                    height: '100px',
                    width: '100px',
                    padding: '10px',
                    overflow: 'hidden',
                    marginRight: '2rem',
                }}
            >
                <Image src={author_img} alt={author} layout="fill" objectFit="contain" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <TextBlock variant="h6" align="left" style={{ fontWeight: 'bolder' }}>
                    {author}
                </TextBlock>
                <TextBlock
                    gutterBottom
                    className={cls.dateandreading}
                >{`${dateFormatted} • ${readingTime} mins`}</TextBlock>
            </div>
        </div>
    );
};
