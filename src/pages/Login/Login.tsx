import { useState, FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const toastRef = useRef<Toast>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login({ username, password });
      toastRef.current?.show({
        severity: 'success',
        summary: 'Login exitoso',
        detail: 'Bienvenido!',
        life: 3000,
      });
      navigate('/dashboard');
    } catch (error) {
      toastRef.current?.show({
        severity: 'error',
        summary: 'Error de autenticación',
        detail: 'Usuario o contraseña incorrectos',
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex align-items-center justify-content-center bg-gray-100">
      <Toast ref={toastRef} />
      <Card className="w-full md:w-400 shadow-5">
        <div className="text-center mb-4">
          <i className="pi pi-building text-5xl text-primary mb-3"></i>
          <h1 className="text-2xl font-bold text-900 mb-2">SaaS de Spring</h1>
          <p className="text-600">Inicia sesión para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-column gap-3">
          <div className="flex flex-column gap-2">
            <label htmlFor="username" className="font-medium text-700">
              Usuario
            </label>
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingresa tu usuario"
              className="w-full"
              required
              disabled={loading}
            />
          </div>

          <div className="flex flex-column gap-2">
            <label htmlFor="password" className="font-medium text-700">
              Contraseña
            </label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="w-full"
              inputClassName="w-full"
              feedback={false}
              toggleMask
              required
              disabled={loading}
            />
          </div>

          <Button
            type="submit"
            label="Iniciar Sesión"
            icon="pi pi-sign-in"
            loading={loading}
            className="mt-3 w-full"
          />
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-500">
            Demo: usa cualquier usuario y contraseña
          </p>
        </div>
      </Card>
    </div>
  );
}
