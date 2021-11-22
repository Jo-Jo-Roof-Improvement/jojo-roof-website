import cn from 'classnames';
import style from './StripBase.module.css';

export interface StripBaseProps {
    children: React.ReactNode;
    align?: 'left' | 'right' | 'center';
    height: string; // that ends in px or rem or some other unit
}

export const StripBase = ({ children, align, height }: StripBaseProps) => {
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
