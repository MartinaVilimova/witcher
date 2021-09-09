import React, { useEffect, useState }  from 'react'
import Header from '../../components/header'
import Being from '../../components/itemOnTheList'
import { getCharactersData, RandomCharacter } from '../../utils/getUserData'
import './styles.css'


const Characters: React.FC = () => {
    const [characterData, setCharacterData] = useState<RandomCharacter[]>([])
    
    useEffect(() => {
        getCharactersData().then((data) => setCharacterData(data))
    }, [])

    return (
        <div className="wrapper-characters">
            <Header title="postavy" />
            <div className="list-characters">
                {characterData.map((character) => (
                    <Being key={character.id} name={character.name} photo={character.image} />
                ))}
            </div>
        </div>
    )
}

export default Characters
