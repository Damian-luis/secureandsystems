export const loginService = async (username: string, password: string) => {
    return username === 'admin' && password === 'admin';
  };