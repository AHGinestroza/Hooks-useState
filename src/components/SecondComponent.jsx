import React, { useState } from 'react'

export const SecondComponent = () => {

  const [ name, setName ] = useState("Anderson Hinestroza");
  const [ isNameChanged, setIsNameChanged ] = useState(false);

  const changeName = (e) => {
    if (isNameChanged) {
      setName("Anderson Hinestroza");
    } else {
      setName("Juan Guerra");
    }
    setIsNameChanged(!isNameChanged);
  }

  return (
    <div>
      <h3>Componente: SecondComponent</h3>
      <p>{ name }</p>
      <div>
        <button className='button-large' onClick={ changeName }>Cambiar nombre</button>
      </div>
    </div>
  )
}
