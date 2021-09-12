import React from 'react'
import { Link } from 'react-router-dom'
import picture from '../../assets/home-picture.png'
import nature from '../../assets/nature.png'
import sky from '../../assets/sky.png'
import './styles.css'

const Home: React.FC = () => (
    <div className="wrapper">
        <img className="forest" src={nature} alt="krajina" />
        <img className="sky" src={sky} alt="nebe" />
        <main className="content">
            <img className="main-picture" src={picture} alt="witcher" />
            <Link to="/characters" className="yrden">
                <span className="hidden-text">Characters</span>
            </Link>
            <Link to="/creatures" className="ard">
                <span className="hidden-text">Creatures</span>
            </Link>
            <Link to="/quests" className="axie">
                <span className="hidden-text">Quests</span>
            </Link>
            <a href="https://witcher.fandom.com/wiki/The_Witcher_3:_Wild_Hunt" className="quen">
                <span className="hidden-text">TW3 Wiki</span>
            </a>
            <a href='https://martina-vilimova-portfolio.web.app/' className="igni">
                <span className="hidden-text">Author</span>
            </a>
        </main>
    </div>
)

export default Home
