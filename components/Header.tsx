import React from 'react';
import styles from './Header.module.css';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

interface HeaderProps {
    name?: string;
    lastname?: string;
}

const Header: React.FC<HeaderProps> = ({ name, lastname }) => {
  const initials = (name && name.length > 0 ? name.charAt(0).toUpperCase() : '') +
                     (lastname && lastname.length > 0 ? lastname.charAt(0).toUpperCase() : '');

    return (
        <header className={styles.header}>
            <Avatar sx={{ bgcolor: deepPurple[500], width: "80px", height: "80px" }}>
                <p>{initials}</p>
            </Avatar>
            <div>
                <h1 className={styles.h1} data-aos="fade-right">{name} {lastname}</h1>
            </div>
        </header>
    );
}

export default Header;

  