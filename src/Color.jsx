import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

function Color({ colors }) {
    const navigate = useNavigate()
    const { color } = useParams()
    useEffect(() => {
        color in colors ?
            undefined :
            navigate('/colors')

    }, [color])
    return (

        < div style={{ backgroundColor: colors[color], width: '10rem', height: '10rem' }}>
            <h1>{color}</h1>
        </div >
    )
}

export default Color;