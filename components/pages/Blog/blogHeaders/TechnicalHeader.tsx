import { TextBlock } from '@components/common/text/TextBlock';
import cls from './BlogHeader.module.scss';

export const TechnicalHeader = () => {
    return (
        <section className={cls.blogposts}>
            <TextBlock variant="h3">Welcome to the Palavyr Technical Blog</TextBlock>
            <TextBlock variant="h6">Where we discuss technical approaches and decisions made with Palavyr</TextBlock>
        </section>
    );
};
