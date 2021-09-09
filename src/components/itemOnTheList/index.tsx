import React from 'react'
import './styles.css'

type Props = {
    name: string
    photo: string
}

const Being: React.FC<Props> = ({name, photo}) => {
    return (
        <div className="wrapper-item">
            <img src={photo} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default Being
