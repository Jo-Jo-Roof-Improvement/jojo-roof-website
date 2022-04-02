import { TextBlock } from '@components/common/text/TextBlock';
import cls from './Quote.module.scss';

export interface QuoteProps {
    children: React.ReactNode;
}

export const Quote = ({ children }: QuoteProps) => {
    return (
        <div className={cls.quoteContainer}>
            <TextBlock className={cls.text}>{children}</TextBlock>
        </div>
    );
};
