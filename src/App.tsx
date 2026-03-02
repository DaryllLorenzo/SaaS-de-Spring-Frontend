import { useState } from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Toast } from 'primereact/toast'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toast />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Card
          title="Bienvenido a PrimeReact"
          subTitle="Tu aplicación SaaS está lista"
          className="w-18rem"
        >
          <div className="flex flex-column gap-3 mt-3">
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
            <Button
              label={`Clicks: ${count}`}
              icon="pi pi-thumbs-up"
              onClick={() => setCount((count) => count + 1)}
            />
          </div>
        </Card>
      </div>
    </>
  )
}

export default App
