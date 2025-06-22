/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string;
  readonly VITE_PUBLIC_REDUX_KEY: string;
  readonly VITE_PUBLIC_TOKEN_LOCAL: string;
  readonly VITE_PUBLIC_USER_LOCAL: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
