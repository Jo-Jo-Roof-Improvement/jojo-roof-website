import cn from 'classnames';
import style from './StripBase.module.css';

export interface StripProps {
    children: React.ReactNode;
    align?: 'left' | 'right' | 'center';
    height: string; // that ends in px or rem or some other unit
}

const Strip = ({ children, align, height }: StripProps) => {
    return (
        <div
            style={{ height }}
            className={cn(style.stripbody, {
                [style.left]: align === 'left',
                [style.right]: align === 'right',
                [style.center]: align === 'center' || align === undefined,
            })}
        >
            {children}
        </div>
    );
};

export default Strip;
