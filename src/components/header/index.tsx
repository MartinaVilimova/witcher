import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/list-picture.png'
import './styles.css'

type Props = {
    title: string
}

const Header: React.FC<Props> = ({title}) => {
    return (
            <header>
                <Link to="/">
                    <img src={logo} alt="wither" />
                </Link>
                <span>{title}</span>
            </header>
    )
}

export default Header
