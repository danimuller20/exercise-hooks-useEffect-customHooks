import React, { useEffect, useState } from 'react';

function Greeting({ initialName = '' }) {
  const [name, setName] = useState(initialName);
  
  useEffect(() => {
    const localStorageName = window.localStorage.getItem('name') || initialName
    setName(localStorageName)
    // 🐨 inicialize o estado com o valor que vem do localStorage
    // 💰 window.localStorage.getItem('name') || initialName
  }, [initialName])

  useEffect(() => {
    window.localStorage.setItem('name', name);
    // 🐨 Utilize o hook useEffect para atualizar a
    // propriedade `name` no localStorage quando o estado for alterado
    // 💰 window.localStorage.setItem('name', name)
  }, [name])

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
