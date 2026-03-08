export interface RouteConfig {
  path: string;
  element: string;
  protected: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: '/login',
    element: 'Login',
    protected: false,
  },
  {
    path: '/dashboard',
    element: 'Dashboard',
    protected: true,
  },
];
