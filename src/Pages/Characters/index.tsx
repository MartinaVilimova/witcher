import React, { useEffect, useState }  from 'react'
import Header from '../../components/header'
import ItemOfList, { TypeItems } from '../../components/itemOnTheList'
import { getCharactersData, RandomCharacter } from '../../utils/getUserData'
import sky from '../../assets/sky.png'
import './styles.css'


const Characters: React.FC = () => {
    const [characterData, setCharacterData] = useState<RandomCharacter[]>([])
    const [races, setRaces] = useState('all')
    const [sorting, setSorting] = useState('id')

    const allRaces = characterData.map(({race}) => race)
    // vypsání všech ras jednotlivých postav
    const deduplicatedRaces = allRaces.reduce((acc, race) => {
        // podmínka říká pokud se v akumulátoru nachází shodná race vrátí stáváající acc bez přidání nové hodonty
        // pokud rasu neobsahuje přidá ji do svého nového pole
        if(acc.includes(race)){
            return acc
        }
        const newAcc = [
            ...acc, race
        ]
        return newAcc
    }, [] as string[])
    // kvůli správnému otypování se násilým zde vynutí typ [] as string[]
    
    useEffect(() => {
        getCharactersData().then((data) => setCharacterData(data))
    }, [])

    // prázdné pole v useState se bere jako hodnota true proto se musí dát podmínka o zjištění velikosti
    if(characterData.length !== 0) {
        console.log(sorting)
        const filteredCharactersByRace = races === 'all' ? characterData : characterData.filter((person) => person.race === races)
        const sorteredData  = sorting === 'id' ? filteredCharactersByRace.sort((a, b) => a.id < b.id ? -1 : 1) : filteredCharactersByRace.sort((a, b) => a.name < b.name ? -1 : 1)
        return (
            <div className="wrapper-characters">
                <img className="sky" src={sky} alt="nebe" />
                <Header title="Persons" />
                <section className="filter-and-list">
                    <form className="filter">
                        <div>
                            <label htmlFor='filterOfRace'>Choose a race:</label>
                            <select id='filterOfRace' name='filterOfRace' onChange={(selectedRace) => setRaces(selectedRace.target.value)}>
                                <option value="all">All characters</option>
                                {deduplicatedRaces.map((race) => (
                                    <option value={race}>{race}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor='sortOfCharacters'>Sort by:</label>
                            <select id='sortOfCharacters' name='sortOfCharacters' onChange={(selectedSorting) => setSorting(selectedSorting.target.value)}>
                                <option value="id">Unigue ID</option>
                                <option value="aplhabeth">A - Z</option>
                            </select>
                        </div>
                    </form>
                    <div className="list-characters">
                        {sorteredData.map((character) => (
                            <ItemOfList 
                            key={character.id} 
                            order={character.id} 
                            item={TypeItems.Person} 
                            name={character.name} 
                            photo={character.image} />
                        ))}
                    </div>
                </section>
            </div>
        )
    }
    else {
        return (
            <div className="wrapper-characters">
                <img className="sky" src={sky} alt="nebe" />
                <Header title="postavy" />
                <section className="content-loading">
                    <div className="loading">
                        Loading . . .
                    </div>
                </section>
            </div>
        )
    }
}

export default Characters
