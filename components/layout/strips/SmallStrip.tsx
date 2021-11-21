import cn from 'classnames';
import style from './SmallStrip.module.css';

export interface StripProps {
    children: React.ReactNode;
    align: 'left' | 'right' | 'center';
}

const Strip = ({ children, align }: StripProps) => {
    return (
        <div
            className={cn(style.stripbody, {
                [style.left]: align === 'left',
                [style.right]: align === 'right',
                [style.center]: align === 'center',
            })}
        >
            {children}
        </div>
    );
};

export default Strip;
