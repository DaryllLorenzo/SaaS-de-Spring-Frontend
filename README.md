# SaaS de Spring - Frontend

Aplicación React + TypeScript + Vite con PrimeReact para el frontend del SaaS de Spring.

## Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **PrimeReact** - Componentes de UI
- **React Router** - Navegación y routing
- **PrimeFlex** - Utilidades CSS
- **Quill** - Editor de texto enriquecido (para PrimeReact Editor)

## Instalación

```bash
pnpm install
pnpm install quill  # Requerido para el componente Editor
```

## Estructura del Proyecto

```
src/
├── assets/              # Imágenes, fuentes, iconos
├── components/          # Componentes reutilizables
│   ├── common/          # Componentes de UI genéricos
│   └── layout/          # Componentes de layout (Header, Sidebar, Footer)
│       └── DashboardLayout.tsx
├── context/             # Contextos de React (Estado global)
│   └── AuthContext.tsx  # Autenticación y usuario actual
├── pages/               # Componentes de página
│   ├── Login/
│   │   └── Login.tsx
│   └── Dashboard/
│       └── Dashboard.tsx
├── routes/              # Configuración de rutas
│   ├── AppRouter.tsx    # Componente principal de rutas
│   ├── ProtectedRoute.tsx  # HOC para rutas protegidas
│   └── index.ts         # Definición de rutas
├── services/            # Lógica de negocio y llamadas a API
│   └── authService.ts   # Servicio de autenticación
├── styles/              # Estilos globales y temas
├── utils/               # Funciones utilitarias y helpers
├── App.tsx              # Componente raíz
├── App.css              # Estilos del App
├── main.tsx             # Punto de entrada
└── index.css            # Estilos globales
```

## Scripts Disponibles

```bash
pnpm dev      # Iniciar servidor de desarrollo
pnpm build    # Compilar para producción
pnpm lint     # Ejecutar linter
pnpm preview  # Vista previa del build
```

## Flujo de Autenticación

1. El usuario ingresa en `/login`
2. Ingresa credenciales (demo: cualquier usuario/contraseña)
3. Al hacer login, se guarda el token y usuario en localStorage
4. Es redirigido al `/dashboard`
5. El `ProtectedRoute` verifica autenticación en rutas protegidas
6. Al cerrar sesión, se limpia el storage y vuelve al login

## Rutas

| Ruta | Protección | Descripción |
|------|------------|-------------|
| `/login` | ❌ No | Página de inicio de sesión |
| `/dashboard` | ✅ Sí | Dashboard principal con sidebar |
| `/` | ✅ Sí | Redirige a `/dashboard` |
| `*` | ❌ No | Redirige a `/login` |

## Componentes Principales

### AuthContext
Provee el estado de autenticación a toda la app:
- `user` - Usuario actual
- `token` - Token de sesión
- `isAuthenticated` - Estado de autenticación
- `login()` - Función para iniciar sesión
- `logout()` - Función para cerrar sesión

### DashboardLayout
Layout principal con:
- Navbar superior con logo y avatar
- Sidebar lateral con menú de navegación
- Área de contenido principal

### ProtectedRoute
Componente que protege rutas requiriendo autenticación:
- Muestra loading mientras verifica el estado
- Redirige a `/login` si no está autenticado
- Renderiza el contenido si está autenticado

## PrimeReact Utilizado

- `InputText` - Campos de texto
- `Password` - Campo de contraseña
- `Button` - Botones
- `Card` - Contenedores con tarjeta
- `Sidebar` - Panel lateral
- `Avatar` - Avatar de usuario
- `Toast` - Notificaciones
- `Chart` - Gráficos
- `Badge` - Insignias

## Próximos Pasos

- [ ] Conectar con API real del backend Spring
- [ ] Agregar más rutas protegidas
- [ ] Implementar gestión de usuarios
- [ ] Agregar tema oscuro/claro
- [ ] Mejorar validación de formularios
