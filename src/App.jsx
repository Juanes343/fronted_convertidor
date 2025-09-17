import { useState } from 'react'
import ConvertidorTiempo from './componentes/ConvertidorTiempo'
import ConvertidorPeso from './componentes/ConvertidorPeso'
import ConvertidorTemperatura from './componentes/ConvertidorTemperatura'
import ConvertidorMoneda from './componentes/ConvertidorMoneda'
import './App.css'

function App() {
  const [tipoConvertidor, setTipoConvertidor] = useState('tiempo')

  const renderizarConvertidor = () => {
    switch (tipoConvertidor) {
      case 'tiempo':
        return <ConvertidorTiempo />
      case 'peso':
        return <ConvertidorPeso />
      case 'temperatura':
        return <ConvertidorTemperatura />
      case 'moneda':
        return <ConvertidorMoneda />
      default:
        return <ConvertidorTiempo />
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🔄 Convertidor Universal de Medidas</h1>
        <p>Convierte fácilmente entre diferentes unidades</p>
      </header>
      
      <nav className="navegacion">
        <button 
          className={tipoConvertidor === 'tiempo' ? 'activo' : ''}
          onClick={() => setTipoConvertidor('tiempo')}
        >
          ⏰ Tiempo
        </button>
        <button 
          className={tipoConvertidor === 'peso' ? 'activo' : ''}
          onClick={() => setTipoConvertidor('peso')}
        >
          ⚖️ Peso
        </button>
        <button 
          className={tipoConvertidor === 'temperatura' ? 'activo' : ''}
          onClick={() => setTipoConvertidor('temperatura')}
        >
          🌡️ Temperatura
        </button>
        <button 
          className={tipoConvertidor === 'moneda' ? 'activo' : ''}
          onClick={() => setTipoConvertidor('moneda')}
        >
          💰 Moneda
        </button>
      </nav>

      <main className="contenido-principal">
        {renderizarConvertidor()}
      </main>
    </div>
  )
}

export default App
