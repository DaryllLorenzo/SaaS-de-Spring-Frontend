import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import { useState } from 'react';

export default function Dashboard() {
  const [content, setContent] = useState<string>('<p>¡Hola! Este es el editor de texto enriquecido.</p>');

  return (
    <div className="flex flex-column gap-4">
      <div className="flex align-items-center justify-content-between">
        <h2 className="text-2xl font-bold text-900 m-0">Dashboard</h2>
        <Button label="Nuevo Reporte" icon="pi pi-plus" className="p-button-success" />
      </div>

      {/* Stats Cards */}
      <div className="grid">
        <div className="col-12 md:col-6 lg:col-3">
          <Card className="shadow-2">
            <div className="flex align-items-center justify-content-between mb-3">
              <div>
                <p className="text-500 text-sm m-0">Usuarios</p>
                <h3 className="text-3xl font-bold text-900 m-0">1,254</h3>
              </div>
              <div className="flex align-items-center justify-content-center bg-blue-100 border-circle w-3rem h-3rem">
                <i className="pi pi-users text-xl text-blue-600"></i>
              </div>
            </div>
            <span className="text-green-500 text-sm font-medium">
              <i className="pi pi-arrow-up mr-1"></i>
              +12.5% vs mes anterior
            </span>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <Card className="shadow-2">
            <div className="flex align-items-center justify-content-between mb-3">
              <div>
                <p className="text-500 text-sm m-0">Ingresos</p>
                <h3 className="text-3xl font-bold text-900 m-0">$24,500</h3>
              </div>
              <div className="flex align-items-center justify-content-center bg-green-100 border-circle w-3rem h-3rem">
                <i className="pi pi-dollar text-xl text-green-600"></i>
              </div>
            </div>
            <span className="text-green-500 text-sm font-medium">
              <i className="pi pi-arrow-up mr-1"></i>
              +8.2% vs mes anterior
            </span>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <Card className="shadow-2">
            <div className="flex align-items-center justify-content-between mb-3">
              <div>
                <p className="text-500 text-sm m-0">Pedidos</p>
                <h3 className="text-3xl font-bold text-900 m-0">456</h3>
              </div>
              <div className="flex align-items-center justify-content-center bg-orange-100 border-circle w-3rem h-3rem">
                <i className="pi pi-shopping-cart text-xl text-orange-600"></i>
              </div>
            </div>
            <span className="text-red-500 text-sm font-medium">
              <i className="pi pi-arrow-down mr-1"></i>
              -3.1% vs mes anterior
            </span>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <Card className="shadow-2">
            <div className="flex align-items-center justify-content-between mb-3">
              <div>
                <p className="text-500 text-sm m-0">Tasa Conversión</p>
                <h3 className="text-3xl font-bold text-900 m-0">3.24%</h3>
              </div>
              <div className="flex align-items-center justify-content-center bg-purple-100 border-circle w-3rem h-3rem">
                <i className="pi pi-chart-line text-xl text-purple-600"></i>
              </div>
            </div>
            <span className="text-green-500 text-sm font-medium">
              <i className="pi pi-arrow-up mr-1"></i>
              +5.7% vs mes anterior
            </span>
          </Card>
        </div>
      </div>

      {/* Editor y Actividades */}
      <div className="grid">
        <div className="col-12 lg:col-8">
          <Card title="Editor de Texto Enriquecido" className="shadow-2">
            <Editor
              value={content}
              onTextChange={(e) => setContent(e.htmlValue || '')}
              style={{ height: '320px' }}
            />
          </Card>
        </div>

        <div className="col-12 lg:col-4">
          <Card title="Actividades Recientes" className="shadow-2">
            <ul className="list-none p-0 m-0">
              <li className="flex align-items-center gap-3 py-3 border-bottom-1 surface-border">
                <i className="pi pi-check-circle text-green-500 text-xl"></i>
                <div>
                  <p className="font-medium text-900 m-0 text-sm">Nuevo usuario registrado</p>
                  <p className="text-500 text-xs m-0">Hace 5 minutos</p>
                </div>
              </li>
              <li className="flex align-items-center gap-3 py-3 border-bottom-1 surface-border">
                <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                <div>
                  <p className="font-medium text-900 m-0 text-sm">Nueva venta realizada</p>
                  <p className="text-500 text-xs m-0">Hace 15 minutos</p>
                </div>
              </li>
              <li className="flex align-items-center gap-3 py-3 border-bottom-1 surface-border">
                <i className="pi pi-envelope text-orange-500 text-xl"></i>
                <div>
                  <p className="font-medium text-900 m-0 text-sm">Mensaje de soporte</p>
                  <p className="text-500 text-xs m-0">Hace 1 hora</p>
                </div>
              </li>
              <li className="flex align-items-center gap-3 py-3">
                <i className="pi pi-cog text-purple-500 text-xl"></i>
                <div>
                  <p className="font-medium text-900 m-0 text-sm">Configuración actualizada</p>
                  <p className="text-500 text-xs m-0">Hace 2 horas</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Vista Previa en Tiempo Real */}
      <Card title="Vista Previa en Tiempo Real" className="shadow-2">
        <div 
          className="border-1 border-round p-4 bg-white"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Card>
    </div>
  );
}
