import React  from 'react'
import Header from '../../components/header'
// import { getCharactersData, RandomCharacter } from '../../utils/getUserData'
import './styles.css'


const Characters: React.FC = () => {
    // const [characterData, setCharacterData] = useState<RandomCharacter[]>([])
    // const [click, setClick] = useState(false)
    
    // useEffect(() => {
    //     getCharactersData().then(setCharacterData)
    // }, [click])

    // const name = characterData.map(person => person.name)
    return (
        <div className="wrapper-characters">
            <Header title="postavy" />
            {/* <button onClick={() => setClick(!click)}>klik</button>
            <div>
                {name}
            </div> */}
        </div>
    )
}

export default Characters
