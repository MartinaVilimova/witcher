
export type RandomCharacter = {
    id: number
    gender: string
    name: string
    race: string
    profession: string
    nationality: string
    image: string
}

export const urlCharacters = 'http://witcher3api.com/api/characters'

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

export const getCharacterDetail = async (id:number): Promise<RandomCharacter> => {
        const data = await fetch(`${urlCharacters}/${id}`)
        const jsonData = await data.json()
        return jsonData[0]
}

export type RandomCreatures = {
    id: number
    name: string
    class: string
    tactics: string
    susceptibility: string
    immunity: string
    quest: string
    image: string
    occurences: string
}

export const urlCreatures = 'http://witcher3api.com/api/creatures'

export const getCreaturesData = async (): Promise<RandomCreatures[]> => {
    try {
        const data = await fetch(urlCreatures)
        const jsonData = await data.json()
        return jsonData
    } catch (error) {
        console.error(error)
        return []
    }
}

export const getCreaturesDetail = async (id:number): Promise<RandomCreatures> => {
        const data = await fetch(`${urlCreatures}/${id}`)
        const jsonData = await data.json()
        return jsonData[0]
}

export type RandomQuests = {
    id: number
    name: string
    type: string
    region: string
    level: string
}

export const urlQuests = 'http://witcher3api.com/api/quests'

export const getQuestsData = async (): Promise<RandomQuests[]> => {
    try {
        const data = await fetch(urlQuests)
        const jsonData = await data.json()
        return jsonData
    } catch (error) {
        console.error(error)
        return []
    }
}