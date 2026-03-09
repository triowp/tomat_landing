# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

---

## Docker / Containerization

The project can be run inside Docker containers using the provided `Dockerfile` configurations and `docker-compose.yml`.

### Backend

1. Build the backend image:
   ```bash
   docker build -t tomato-backend ./backend
   ```
2. Run it:
   ```bash
   docker run -p 8000:8000 tomato-backend
   ```
3. The API will be available at `http://localhost:8000`.

### Frontend

1. Build the frontend image:
   ```bash
   docker build -f Dockerfile.frontend -t tomato-frontend .
   ```
2. Run it:
   ```bash
   docker run -p 3000:80 tomato-frontend
   ```
3. The static site will be served on `http://localhost:3000`.

### Using Docker Compose

A single command builds and starts both services:

```bash
docker-compose up --build
```

This maps the backend to `8000` and the frontend to `3000`. The frontend is configured to talk to the backend at `http://backend:8000` inside the compose network; CORS headers in the backend allow the local frontend origin.

> **Note:** the frontend reads the API base URL from the `VITE_API_BASE` env var at build time, defaulting to `http://localhost:8000`. You can set it when building or running the container:
>
> ```bash
> # build with custom backend address
> docker build -f Dockerfile.frontend --build-arg VITE_API_BASE="http://backend:8000" -t tomato-frontend .
> ```

