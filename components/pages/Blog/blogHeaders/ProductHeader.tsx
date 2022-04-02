import { TextBlock } from '@components/common/text/TextBlock';
import cls from './BlogHeader.module.scss';

export const ProductHeader = () => {
    return (
        <section className={cls.blogposts}>
            <TextBlock variant="h3">Welcome to the jojoroof.com.au Blog</TextBlock>
            <TextBlock variant="h6">Where we discuss products, advice, services, and more</TextBlock>
        </section>
    );
};
