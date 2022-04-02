import { Layout } from '@components/layout/Layout';
import { BlogFrontMatter } from 'types';
import { MDXRemote } from 'next-mdx-remote';

import cls from './BlogPostPage.module.scss';
import { BlogFullPageCard } from './backdrop/BlogFullPageCard';
import { BlogLink } from './elements/BlogLink';
import { BlogImage } from './elements/BlogImage';
import { HPos } from './elements/HPos';
import { Quote } from './elements/Quote';

export interface BlogPostPageProps {
    frontMatter: BlogFrontMatter;
    serializedMarkdown: string;
    readingTime: number;
}

export const BlogPostPage = ({ frontMatter, serializedMarkdown, readingTime }: BlogPostPageProps) => {
    const { title, image, date, author, author_img } = frontMatter;

    const parts = image.split('/').slice(1);
    const truncatedImage = parts.join('/');

    return (
        <Layout pageTitle="JoJo Roof - Blog Post">
            <div className={cls.container}>
                <div className={cls.inner}>
                    <BlogFullPageCard
                        shareButtons
                        title={title}
                        date={date}
                        img={truncatedImage}
                        readingTime={readingTime.toString()}
                        author={author}
                        author_img={author_img}
                    >
                        {/* @ts-ignore */}
                        <MDXRemote
                            {...serializedMarkdown}
                            components={{
                                a: BlogLink,
                                BlogImage,
                                BlogLink,
                                HPos,
                                Quote,
                            }}
                        />
                    </BlogFullPageCard>
                </div>
            </div>
        </Layout>
    );
};
