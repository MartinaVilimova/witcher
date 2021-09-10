import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import ItemOfList, { TypeItems } from '../../components/itemOnTheList'
import { getCreaturesData, RandomCreatures } from '../../utils/getUserData'
import sky from '../../assets/sky.png'
import './styles.css'

const Creatures: React.FC = () => {
    const [creaturesData, setCreaturesData] = useState<RandomCreatures[]>([])

    useEffect(() => {
        getCreaturesData().then((data) => setCreaturesData(data))
    }, [])

    return (
        <div className="wrapper-creatures">
            <img className="sky" src={sky} alt="nebe" />
            <Header title="Monstra" />
            <div className="list-creatures">
                {creaturesData.map((creature) => (
                    <ItemOfList key={creature.id} item={TypeItems.Monster} name={creature.name} photo={creature.image} />
                ))}
            </div>
        </div>
    )
}

export default Creatures
