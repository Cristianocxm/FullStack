import React, { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

function TemaEscuro(){
    const [dark, setDark] = useState(false);

    return(
        <ThemeContext.Provider value={dark}>
            <button onClick={()=> setDark(!dark)}>Alterar Tema</button>
            <Pagina />
        </ThemeContext.Provider>
    );
}

function Pagina(){
    const dark = useContext(ThemeContext);
    return <div style={{ background: dark ? '#333': '#fff'}}>Página</div>
}

export default TemaEscuro;