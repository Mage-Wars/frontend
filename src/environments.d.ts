declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEV_SERVER_PORT?: string;
      NODE_ENV?: 'development' | 'production';
    }
  }
}

export {}