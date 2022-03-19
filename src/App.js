import React, {useState} from 'react';
import './App.css';

import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'
import Card from './components/Card'

function App() {
  const [min, setMin] = useState(100)
  const [max, setMax] = useState(1000)
  return (
    <div className='App'>
      <h1>Projeto-Redux</h1>
      
      <div className='linha'>
        <Intervalo min={min} max={max}></Intervalo>
      </div>

      <div className='linha'>
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>

    </div>
  )
}

export default App;
