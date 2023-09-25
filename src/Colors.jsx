import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Colors({ colors }) {
    const navigate = useNavigate();

    function goToForm() {
        navigate('/colors/new')
    }

    return (
        <>
            <button onClick={goToForm}>New Color</button>
            <nav >

                <ul>
                    {Object.keys(colors).map(c => <li key={c}><NavLink to={`/colors/${c}`}>{c}</NavLink></li>)}
                </ul>
            </nav>
        </>
    )
}

export default Colors;