import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { useAuth } from '../../context/AuthContext';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();

  const menuItems = [
    { label: 'Dashboard', icon: 'pi pi-home', path: '/dashboard' },
    { label: 'Usuarios', icon: 'pi pi-users', path: '/users' },
    { label: 'Configuración', icon: 'pi pi-cog', path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar - Fixed */}
      <div className="bg-white shadow-2 p-3 flex align-items-center justify-content-between" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div className="flex align-items-center gap-3">
          <Button
            icon="pi pi-bars"
            className="p-button-text p-button-secondary"
            onClick={() => setSidebarOpen(true)}
          />
          <h1 className="text-xl font-bold text-primary m-0">SaaS de Spring</h1>
        </div>

        <div className="flex align-items-center gap-3">
          <Avatar
            label={user?.username?.charAt(0).toUpperCase()}
            shape="circle"
            className="bg-primary text-white"
          />
          <span className="text-700 font-medium hidden md:block">
            {user?.username}
          </span>
          <Button
            icon="pi pi-sign-out"
            className="p-button-text p-button-danger"
            onClick={logout}
            tooltip="Cerrar sesión"
          />
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar
        visible={sidebarOpen}
        onHide={() => setSidebarOpen(false)}
        position="left"
        className="w-15rem"
      >
        <div className="flex flex-column h-full">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-900 m-0">Menú</h3>
          </div>

          <div className="flex flex-column gap-2 flex-1">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                label={item.label}
                icon={item.icon}
                className="p-button-text p-button-rounded justify-content-start p-3"
              />
            ))}
          </div>

          <div className="mt-auto pt-4 border-top-1 surface-border">
            <div className="flex align-items-center gap-3 p-3">
              <Avatar
                label={user?.username?.charAt(0).toUpperCase()}
                shape="circle"
                className="bg-primary text-white"
                size="large"
              />
              <div>
                <p className="font-bold text-900 m-0">{user?.username}</p>
                <p className="text-sm text-500 m-0">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>

      {/* Main Content */}
      <main className="p-4" style={{ marginTop: '60px' }}>
        {children || <Outlet />}
      </main>
    </div>
  );
}
