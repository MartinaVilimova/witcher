import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import ItemOfList, { TypeItems } from '../../components/itemOnTheList'
import sky from '../../assets/sky.png'
import { getQuestsData, RandomQuests } from '../../utils/getUserData'
import './styles.css'

const Quests: React.FC = () => {
    const [questsData, setQuestsData] = useState<RandomQuests[]>([])
    
    useEffect(() => {
        getQuestsData().then((data) => setQuestsData(data))
    }, [])

    if(questsData.length !== 0){
        return (
            <div className="wrapper-quests">
                <img className="sky" src={sky} alt="nebe" />
                <Header title="Quests" />
                <div className="list-quests">
                    {questsData.map((quest) => (
                        <ItemOfList 
                        key={quest.id} 
                        item={TypeItems.Quest} 
                        name={quest.name} 
                        type={quest.type}
                        level={quest.level}
                        region={quest.region}
                        />
                    ))}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="wrapper-quests">
                <img className="sky" src={sky} alt="nebe" />
                <Header title="Qesty" />
                <section className="content-loading">
                    <div className="loading">
                        Loading . . .
                    </div>
                </section>
            </div>
        )
    }
}

export default Quests
