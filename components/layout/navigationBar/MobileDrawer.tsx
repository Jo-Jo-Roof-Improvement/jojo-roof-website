import styles from './NavigationBar.module.css';
import { Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';

interface MobileDrawerProps {
    open: boolean;
    toggle(event: React.KeyboardEvent | React.MouseEvent): void;
    children?: React.ReactNode;
}
export const MobileDrawer = ({ open, toggle, children }: MobileDrawerProps) => {
    return (
        <Drawer
            PaperProps={{ style: { backgroundColor: 'rgba(23, 23, 23, 0.95)' } }}
            className={classNames(styles.drawer, 'md:invisible')}
            classes={{ paper: styles.drawerPaper }}
            anchor="left"
            open={open}
            onClose={(e: React.KeyboardEvent | React.MouseEvent) => toggle(e)}
        >
            <div className="flex flex-row justify-end p-6">
                <CloseIcon onClick={toggle} className="font-bold" style={{ fontSize: '26pt', color: 'white' }} />
            </div>
            {children}
        </Drawer>
    );
};
