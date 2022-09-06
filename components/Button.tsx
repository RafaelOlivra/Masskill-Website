import React from 'react'

import styles from '../styles/components/Button.module.css'

interface BtnProps {
    href?: string,
    type?: string,
    className?: string
    id?: string
    rel?: string,
    target?: string,
    children?: React.ReactNode,
    onClick?: () => void
}

const Button: React.FC<BtnProps> = ({ href, type, className, id, rel, target, children, onClick }) => {
    let _className = className || ''
    return (
        <a onClick={onClick}
            href={href}
            id={id}
            className={styles['btn'] + ' ' + styles[_className] + ' ' + styles['btn-' + (type ? type : 'default')]}
            rel={rel}
            target={target}
        >
            {children}
        </a>
    )
}

export default Button