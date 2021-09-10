import React from 'react'
// import { getCharactersData, RandomCharacter } from '../../utils/getUserData'
import sky from '../../assets/sky.png'
import './styles.css'

const Detail: React.FC = () => {
    // const [characterData, setCharacterData] = useState<RandomCharacter[]>([])
    
    // useEffect(() => {
    //     getCharactersData().then((data) => setCharacterData(data))
    // }, [])
    
    // const person = characterData[10]

    return (
        <div  className="wrapper-detail">
            <img className="sky" src={sky} alt="nebe" />
            <header>witcher</header>
            <section className="content-detail">
                <div>
                    <h1>Gerald of Rivia</h1>
                    <p>Gender: Male</p>
                    <p>Race: Human</p>
                    <p>Profession: Witcher</p>
                    <p>Nationality: Kaedwen</p>
                    <p>First appearance: Kaer Morhen</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, ex ratione eos iure quibusdam corrupti quae minus qui quod aspernatur iusto incidunt esse sit modi reprehenderit! Laudantium libero sunt recusandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quidem libero consectetur quaerat distinctio rem vero, consequatur velit delectus, veniam quod. Illo porro minima quaerat, a neque veritatis rerum tempora. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sunt numquam nihil praesentium architecto repellat debitis vitae odio ea eum. Nemo delectus, voluptas assumenda totam ab ducimus porro consequuntur perferendis.</p>
                </div>
                <img src={sky} alt='jmeno' />
            </section>
            
        </div>
    )
}

export default Detail
