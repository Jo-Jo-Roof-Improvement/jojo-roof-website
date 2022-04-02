import { Layout } from '@components/layout/Layout';
import { BlogPostMeta } from 'types';
import { BlogPageTitleContent } from './blogHeaders/BlogPageTitleContent';

import { BlogPostList } from './BlogPostList';

export type BlogPostsProps = {
    posts: BlogPostMeta[];
    blogType: 'posts' | 'posts-technical';
    blogHeader: React.ReactNode;
};

export const BlogPage = ({ posts, blogType, blogHeader }: BlogPostsProps) => {
    return (
        <Layout pageTitle="jojoroof.com.au - Blog">
            {blogHeader}
            <BlogPostList posts={posts} blogType={blogType} />
        </Layout>
    );
};
