import { Link } from "react-router";
import s from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={s.navigation_nav}>
            <Link to="/generate" className={s.navigation_link}>
                Generate QR Code
            </Link>
            <Link to="/scan" className={s.navigation_link}>
                Scan QR Code
            </Link>
            <Link to="/generateHistory" className={s.navigation_link}>
                History generated
            </Link>
            <Link to="/scanHistory" className={s.navigation_link}>
                History scanned
            </Link>
        </nav>
    );
};
