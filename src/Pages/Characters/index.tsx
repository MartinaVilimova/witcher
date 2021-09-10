import React, { useEffect, useState }  from 'react'
import Header from '../../components/header'
import ItemOfList, { TypeItems } from '../../components/itemOnTheList'
import { getCharactersData, RandomCharacter } from '../../utils/getUserData'
import sky from '../../assets/sky.png'
import './styles.css'


const Characters: React.FC = () => {
    const [characterData, setCharacterData] = useState<RandomCharacter[]>([])
    
    useEffect(() => {
        getCharactersData().then((data) => setCharacterData(data))
    }, [])

    return (
        <div className="wrapper-characters">
            <img className="sky" src={sky} alt="nebe" />
            <Header title="postavy" />
            <div className="list-characters">
                {characterData.map((character) => (
                    <ItemOfList key={character.id} item={TypeItems.Person} name={character.name} photo={character.image} />
                ))}
            </div>
        </div>
    )
}

export default Characters
