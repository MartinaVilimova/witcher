import React from 'react'
import picture from '../../assets/home-picture.png'
import './styles.css'

const Home: React.FC = () => {
    return (
        <div className="wrapper">
            <main className="content">
                <div className="yrden"></div>
                <div className="ard"></div>
                <div className="axie"></div>
                <div className="quen"></div>
                <div className="igni"></div>
                <img className="main-picture" src={picture} alt="witcher" />
            </main>
        </div>
    )
}

export default Home
