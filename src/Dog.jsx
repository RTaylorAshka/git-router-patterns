
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function Dog({ dogs }) {
    const navigate = useNavigate();
    const { name } = useParams();
    const [dog, setDog] = useState(null);


    useEffect(() => {
        name in dogs ?
            setDog(dogs[`${name}`]) :
            navigate('/dogs')

    }, [name])

    console.log(dogs[`${name}`])

    return (

        (<>

            {
                dog ?
                    <div>
                        < h2 > {dog.name}</h2 >
                        <img src={dog.src} alt={`picture of ${dog.name}`} />
                    </div> :
                    <h2>loading</h2>
            }


        </>)
    )
}

export default Dog;