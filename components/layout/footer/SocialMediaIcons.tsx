
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';

export const SocialMediaIcons = () => {
    return (
        <div className="flex w-full justify-center">
            <Link href="https://www.facebook.com/">
                <FacebookIcon className="p1 mr-3" />
            </Link>

            <Link href="https://www.instagram.com/jojoroofimprovement/">
                <InstagramIcon className="p1 ml-3" />
            </Link>
        </div>
    );
};
