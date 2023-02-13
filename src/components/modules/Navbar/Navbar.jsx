import { NavLink } from "react-router-dom";

import styles from "./navbar.module.css"

const activeLink = ({isActive}) => {
    return isActive ? `${styles.linkList} ${styles.active}` : styles.linkList;
}

const Navbar = () => {
    return (
        <ul className={styles.list}>
            <li><NavLink className={activeLink} to="/">Home</NavLink></li>
            <li><NavLink className={activeLink} to="/movies">Movies</NavLink></li>
        </ul>
    )
}

export default Navbar;