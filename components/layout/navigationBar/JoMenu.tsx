
import { Menu, MenuProps } from '@mui/material';


export interface JoMenuProps extends MenuProps { }

export const JoMenu = ({ children, anchorEl, onClose, open, ...rest }: JoMenuProps) => {
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            {...rest}
        >
            {children}
        </Menu>
    );
};
