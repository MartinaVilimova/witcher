import React from 'react'
import { Link } from 'react-router-dom'
import picture from '../../assets/home-picture.png'
import './styles.css'

const Home: React.FC = () => {
    return (
        <div className="wrapper">
            <main className="content">
                <img className="main-picture" src={picture} alt="witcher" />
                <Link to="/characters" className="yrden">
                    <div className="hidden-text">Postavy</div>
                </Link>
                <Link to="/creatures" className="ard">
                    <div className="hidden-text">Monstra</div>
                </Link>
                <Link to="/quests" className="axie">
                    <div className="hidden-text">Úkoly</div>
                </Link>
                <a href="https://witcher.fandom.com/wiki/The_Witcher_3:_Wild_Hunt" className="quen">
                    <div className="hidden-text">TW3 Wiki</div>
                </a>
                <a href='https://martina-vilimova-portfolio.web.app/' className="igni">
                    <div className="hidden-text">Autor</div>
                </a>
            </main>
        </div>
    )
}

export default Home
