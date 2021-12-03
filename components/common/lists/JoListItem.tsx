import React from 'react';

export interface JoListItemProps extends React.HTMLProps<HTMLLIElement> {}

export const JoListItem = ({ children, color = 'black', ...rest }: JoListItemProps) => {
    return (
        <li style={{ color }} {...rest}>
            {children}
        </li>
    );
};
