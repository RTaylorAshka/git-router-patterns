import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewColorForm({ addColor }) {
    const navigate = useNavigate();

    const INITIAL_VALUES = {
        colorName: '',
        colorValue: '#e66465'
    }
    const [input, setInput] = useState(INITIAL_VALUES)

    function handleInput(e) {
        const { name, value } = e.target;
        setInput({
            ...input, [name]: value
        })
    }


    function handleSubmit(e) {
        e.preventDefault()
        addColor(input.colorName, input.colorValue)
        navigate('/colors')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInput} name='colorName' value={input.colorName} type="text" placeholder="Name" />
                <input onChange={handleInput} name='colorValue' value={input.colorValue} type="color" />
                <button>Create</button>
            </form>
        </>
    )
}

export default NewColorForm;