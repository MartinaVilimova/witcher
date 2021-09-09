
export type RandomCharacter = {
    name: string
    race: string
    profession: string
    nationality: string
    image: string
}

export const urlCharacters = 'http://witcher3api.com/api/characters'
export const urlCreatures = 'http://witcher3api.com/api/creatures'
export const urlQuests = 'http://witcher3api.com/api/quests'

export const getCharactersData = async (): Promise<RandomCharacter[]> => {
    try {
        const data = await fetch(urlCharacters)
        const jsonData = await data.json()
        return jsonData
    } catch (error) {
        console.error(error)
        return []
    }
}