import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCreaturesDetail, RandomCreatures } from '../../utils/getUserData'
import Header from '../../components/header'
import sky from '../../assets/sky.png'

const DetailMonster: React.FC = () => {
    const [monsterData, setMonsterData] = useState<RandomCreatures>()
    
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        getCreaturesDetail(Number(id)).then(setMonsterData)
    }, [id])

    if(monsterData) {
        return (
            <div  className="wrapper-detail">
                <img className="sky" src={sky} alt="nebe" />
                <Header title='detail' />
                <section className="content-detail">
                    <div>
                        <h1>{monsterData.name}</h1>
                        <p>Class: <span>{monsterData.class}</span></p>
                        <p>Tactics: <span>{monsterData.tactics}</span></p>
                        <p>Susceptibility: <span>{monsterData.susceptibility}</span></p>
                        <p>Immunity: <span>{monsterData.immunity}</span></p>
                        <p>Quest: <span>{monsterData.quest}</span></p>
                        <p>Occurences: <span>{monsterData.occurences}</span></p>
                        <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, ex ratione eos iure quibusdam corrupti quae minus qui quod aspernatur iusto incidunt esse sit modi reprehenderit! Laudantium libero sunt recusandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quidem libero consectetur quaerat distinctio rem vero, consequatur velit delectus, veniam quod. Illo porro minima quaerat, a neque veritatis rerum tempora. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sunt numquam nihil praesentium architecto repellat debitis vitae odio ea eum. Nemo delectus, voluptas assumenda totam ab ducimus porro consequuntur perferendis.<br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, ex ratione eos iure quibusdam corrupti quae minus qui quod aspernatur iusto incidunt esse sit modi reprehenderit! Laudantium libero sunt recusandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quidem libero consectetur quaerat distinctio rem vero, consequatur velit delectus, veniam quod. Illo porro minima quaerat, a neque veritatis rerum tempora. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sunt numquam nihil praesentium architecto repellat debitis vitae odio ea eum. Nemo delectus, voluptas assumenda totam ab ducimus porro consequuntur perferendis.</article>
                    </div>
                    <img className="img-detail" src={monsterData.image} alt={monsterData.name} />
                </section>
            </div>
        )
    }
    else {
        return (
            <div  className="wrapper-detail">
                <img className="sky" src={sky} alt="nebe" />
                <Header title='detail' />
                <section className="content-loading">
                    <div className="loading">
                        Loading . . .
                    </div>
                </section>
            </div>
        )
    }
}

export default DetailMonster
