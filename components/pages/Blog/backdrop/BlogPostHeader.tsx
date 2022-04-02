import { ZoomImage } from '@components/common/image/ZoomInImage';
import { TextBlock } from '@components/common/text/TextBlock';
import { BlogAuthorAndDataDetails } from '@components/pages/Blog/BlogAuthorAndDataDetails';
import { format } from 'date-fns';
import cls from './BlogPostHeader.module.scss';

export interface BlogPostHeaderProps {
    title: string;
    img: string;
    date: string;
    readingTime: string;
    author: string;
    author_img: string;
}

export const BlogPostHeader = ({ title, author, author_img, date, readingTime, img }: BlogPostHeaderProps) => {
    return (
        <>
            <ZoomImage className={cls.img} imgSrc={img} alt="" />
            <div className={cls.titlebox}>
                <TextBlock align="left" variant="h2" gutterBottom>
                    <b>{title}</b>
                </TextBlock>
                <BlogAuthorAndDataDetails
                    author={author}
                    author_img={author_img}
                    dateFormatted={format(new Date(date), 'PPP')}
                    readingTime={readingTime}
                />
            </div>
        </>
    );
};
