'use client'

import Image from "next/image"
import LogoImage from "../../assets/logo.png"
import style from "./Logo.module.scss"

type LogoProps = {
    className?: string
    onClick?: () => void
}

const Logo = ({ className, onClick }: LogoProps) => (
    <Image
        src={LogoImage}
        alt="Logo"
        width={100}
        height={100}
        className={`${className} ${style.logo}`}
        style={onClick ? { cursor: "pointer" } : {}}
        onClick={onClick}
        priority={true}
    />
)

export default Logo
