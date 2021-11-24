import cn from 'classnames';
import style from './StripBase.module.css';

export interface StripBaseProps {
    children?: React.ReactNode;
    align?: 'left' | 'right' | 'center';
    height: string; // that ends in px or rem or some other unit
    backgroundColor?: string; // a hex or rgb (or other that is compatible with the color style property)
}

export const StripBase = ({ children, align, height, backgroundColor = '#a19393' }: StripBaseProps) => {
    return (
        <div
            style={{ minHeight: height, backgroundColor }}
            className={cn('flex items-center', {
                ['justify-start']: align === 'left',
                ['justify-end']: align === 'right',
                ['justify-center']: align === 'center' || align === undefined,
            })}
        >
            {children}
        </div>
    );
};
