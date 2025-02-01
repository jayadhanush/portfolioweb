import React,{useState} from 'react';
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils.js';

const [menuOpen,setMenuOpen]=useState(false);
export const Navbar=()=>
{
    return(
        <nav className={styles.navbar}>
            <a className={styles.title} href>Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                src ={menuOpen? getImageUrl("nav/closeicon.png"): getImageUrl("nav/menuicon.png")} onclick ={()=>
                {
                    setMenuOpen(!menuOpen);
                }
                } alt="menu"/>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#project">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}