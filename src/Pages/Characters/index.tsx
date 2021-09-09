import React, { useEffect, useState } from 'react'
import { getCharactersData, RandomCharacter } from '../../utils/getUserData'


const Characters: React.FC = () => {
    const [characterData, setCharacterData] = useState<RandomCharacter[]>([])
    const [click, setClick] = useState(false)
    
    useEffect(() => {
        getCharactersData().then(setCharacterData)
    }, [click])

    const name = characterData.map(person => person.name)
    return (
        <>
            <button onClick={() => setClick(!click)}>klik</button>
            <div>
                {name}
            </div>
        </>
    )
}

export default Characters
