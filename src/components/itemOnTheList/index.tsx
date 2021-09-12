import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export enum TypeItems {
    Person = 'person',
    Monster = 'monster',
    Quest = 'quest'
}

type Props = {
    name: string
    photo?: string
    item: TypeItems
    type?: string
    level?: string
    region?: string
    order?: number
}

const ItemOfList: React.FC<Props> = ({name, photo, item, type, level, region, order}) => {
    return (
        <>
        {item === TypeItems.Person && (
            <Link to={`/detail/${order}`} className="wrapper-person">
            {/* order představuje měnící se parametr zobrazující pořadovou hodnotu pole, 
            díky které se vyberou data jen jednoho objektu/hodnoty/osoby */}
                <img src={photo} alt={name} />
                <p>{name}</p>
            </Link>
        )}
        {item === TypeItems.Monster && (
            <Link to={`/detailMonster/${order}`} className="wrapper-monster">
                <img src={photo} alt={name} />
                <div className="line"></div>
                <p>{name}</p>
            </Link>
        )}
        {item === TypeItems.Quest && (
            <section className="wrapper-quest">
                <div className="background-black">
                    <section className="level">
                        <div>{level}</div>
                    </section>
                    <section className="quests-type">
                        <span>{type}</span>
                        <span>{region}</span>
                    </section>
                    <p>{name}</p>
                </div>
            </section>
        )}
        </>
    )
}

export default ItemOfList
