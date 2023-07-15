'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo"
import NoteBlock from "../../assets/noteblock.png"
import HamburgerButton from "../HamburgerButton/HamburgerButton"
import styles from './NavigationBar.module.scss'

const links = [
    {
        href: '/',
        label: 'Strona główna',
    },
];

type NavigationBarProps = {
    stripe?: boolean;
}

const NavigationBar = ({ stripe }: NavigationBarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const redirectToHomePage = () => {
        router.push('/');
    }

    return (
        <>
            <nav className="w-full flex justify-center items-center flex-col lg:flex-row p-4 bg-primary">
                <div className="flex w-full lg:w-auto justify-between items-center">
                    <Logo onClick={redirectToHomePage} />
                    <HamburgerButton
                        onClick={() => setIsOpen(!isOpen)}
                        isActivated={isOpen}
                    />
                </div>
                <div className={`flex justify-around items-center flex-col lg:flex-row px-0 lg:px-4 transition-all ${!isOpen ? styles.hidden : ''}`}>
                    <ul className={`flex justify-around items-center flex-col lg:flex-row px-0 lg:px-4 transition-all ${!isOpen ? styles.hidden : ''}`}>
                        {links.map(({ href, label }) => (
                            <li key={`${href}${label}`}>
                                <Link
                                    onClick={() => setIsOpen((previousState) => !previousState)}
                                    href={href}
                                    className={`${pathname === href ? styles.active : ''} font-bold w-auto lg:w-48 mx-2 py-4 text-xl uppercase flex justify-center items-center hover:text-ma-s transition-all lg:border-b-2 lg:border-ma-s`}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            {
                stripe &&
                <div className={styles.stripe}></div>
            }
        </>
    )
}

export default NavigationBar;
