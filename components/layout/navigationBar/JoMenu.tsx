import { Menu, MenuProps } from '@mui/material';

export interface JoMenuProps extends MenuProps {
    backgroundColor?: string;
}

export const JoMenu = ({ children, anchorEl, onClose, open, backgroundColor = '', ...rest }: JoMenuProps) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            MenuListProps={{
                style: { backgroundColor: backgroundColor },
                'aria-labelledby': 'basic-button',
            }}
            {...rest}
        >
            {children}
        </Menu>
    );
};
