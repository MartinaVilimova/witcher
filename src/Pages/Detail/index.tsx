import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCharacterDetail, RandomCharacter } from '../../utils/getUserData'
import sky from '../../assets/sky.png'
import './styles.css'
import Header from '../../components/header'

const Detail: React.FC = () => {
    const [characterData, setCharacterData] = useState<RandomCharacter>()
    
    const {id} = useParams<{id: string}>();
    // useParams je funkce vytahující parametry z url adresy 

    // const transformType = Number(id)
    // abychom mohli vytahovat hodnoty z pole musíme z id:string udělat id:number pomocí funkce Number()
    // const person = characterData[transformType]
    // jelikož bychom načítali všechny hodnoty z pole (všechny postavy) je lepší vytvořit novou funkci, 
    // která provolá nový endpoint na backendu a získáváme pouze objekt jedné postavy s vybraným id

    useEffect(() => {
        getCharacterDetail(Number(id)).then((data) => setCharacterData(data))
    }, [id])

    // načtení dat chvíli trvá a pokud data nejsou k dispozici person = undefined neboli false 
    // pokud data jsou k dispozici person = true
    // pro obě varianty musí být řešení viz níže
    if(characterData) {
        return (
            <div  className="wrapper-detail">
                <img className="sky" src={sky} alt="nebe" />
                <Header title='detail' />
                <section className="content-detail">
                    <div>
                        <h1>{characterData.name}</h1>
                        <p>Gender: <span>{characterData.gender}</span></p>
                        <p>Race: <span>{characterData.race}</span></p>
                        <p>Profession: <span>{characterData.profession}</span></p>
                        <p>Nationality: <span>{characterData.nationality}</span></p>
                        <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, ex ratione eos iure quibusdam corrupti quae minus qui quod aspernatur iusto incidunt esse sit modi reprehenderit! Laudantium libero sunt recusandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quidem libero consectetur quaerat distinctio rem vero, consequatur velit delectus, veniam quod. Illo porro minima quaerat, a neque veritatis rerum tempora. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sunt numquam nihil praesentium architecto repellat debitis vitae odio ea eum. Nemo delectus, voluptas assumenda totam ab ducimus porro consequuntur perferendis.<br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, ex ratione eos iure quibusdam corrupti quae minus qui quod aspernatur iusto incidunt esse sit modi reprehenderit! Laudantium libero sunt recusandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quidem libero consectetur quaerat distinctio rem vero, consequatur velit delectus, veniam quod. Illo porro minima quaerat, a neque veritatis rerum tempora. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sunt numquam nihil praesentium architecto repellat debitis vitae odio ea eum. Nemo delectus, voluptas assumenda totam ab ducimus porro consequuntur perferendis.</article>
                    </div>
                    <img className="img-detail" src={characterData.image} alt={characterData.name} />
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

export default Detail
