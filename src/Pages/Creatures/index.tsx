import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import Being from '../../components/itemOnTheList'
import { getCreaturesData, RandomCreatures } from '../../utils/getUserData'
import './styles.css'

const Creatures: React.FC = () => {
    const [creaturesData, setCreaturesData] = useState<RandomCreatures[]>([])

    useEffect(() => {
        getCreaturesData().then((data) => setCreaturesData(data))
    }, [])

    return (
        <div className="wrapper-creatures">
            <Header title="Monstra" />
            <div className="list-creatures">
                {creaturesData.map((creature) => (
                    <Being key={creature.id} name={creature.name} photo={creature.image} />
                ))}
            </div>
        </div>
    )
}

export default Creatures
