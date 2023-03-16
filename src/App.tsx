import { useState } from 'react'

import './App.css'
import leftarrow from './assets/leftarrow.png'

import { GridItem } from './components/GridItem/GridItem'
import { levels, calculateImc, Level } from "./helpers/imc" 

function App() {
  const [heigth, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null)

  const fnCalc = () => {
    if (heigth && weight) {
      setToShow(calculateImc(heigth, weight))
      console.log(toShow)
    }
    else{
      alert("Preencha os campos")
    }
  }

  const backButton = () => {
    setToShow(null)
    setHeight(0)
    setWeight(0)
  }
  return (
    <div className="App">
      <div className='header-container'>
        <header> <strong>IMC</strong> <span>by Matheus Carlos</span></header>
      </div>
        <div className='container'>
          <div className='main-left'>
            <h1>Calcule o seu IMC</h1>
            <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

            <input
              type="number"
              placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
              value={heigth > 0 ? heigth : ""}
              onChange={e => setHeight(parseFloat(e.target.value))}
            />

            <input 
              type="number"  
              placeholder='Digite o seu peso. Ex: 75.3 (em Kg)'
              value={weight > 0 ? weight : ""}
              onChange={e => setWeight(parseFloat(e.target.value))}
            />

            <button 
              type='submit'
              onClick={fnCalc}
              >Calcular</button>

          </div>
          <div className='main-rigth'>
            {!toShow && 
              <div className='main-rigth-grid'>
                {levels.map((item, key)=>(
                  <GridItem key={key} item={item}/>
                ))}
              </div>
            }
            {toShow && 
              <div className='main-rigth-big'>
                  <div className='main-rigth-arrow' onClick={backButton}>
                    <img src={leftarrow} alt="" width={25} />
                  </div>
                  <GridItem item={toShow}/>
              </div>
            }
          </div>
        </div>
    </div>
  )
}

export default App
