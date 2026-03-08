export interface LoginCredentials {
  username: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    // Mock implementation for demo
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username && credentials.password) {
          resolve({
            token: 'mock-jwt-token-' + Date.now(),
            user: {
              id: 1,
              username: credentials.username,
              email: `${credentials.username}@example.com`,
              role: 'USER',
            },
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  },

  logout: async (): Promise<void> => {
    return Promise.resolve();
  },

  getCurrentUser: async (): Promise<User> => {
    return Promise.resolve({
      id: 1,
      username: 'demo',
      email: 'demo@example.com',
      role: 'USER',
    });
  },
};
