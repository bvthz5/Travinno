# Setup Instructions: TypeScript, Tailwind CSS, and shadcn/ui

This guide explains how to transition this Vite + React Javascript project to support TypeScript, Tailwind CSS, and the shadcn/ui component system.

---

## 1. Why `src/components/ui` is Important
In a standard React project, custom layout components (like `Header`, `DestinationShowcase`, or `WhyTravinno`) and visual sections are mixed with reusable, atomic UI primitives (like buttons, dialogs, or dropdowns).
* **Isolation of Primitives**: Creating a `/components/ui` directory separates basic design-system atoms (managed or added automatically via the shadcn CLI) from your custom page templates and section layouts.
* **shadcn CLI Path Defaults**: By default, shadcn's configuration (`components.json`) targets `@/components/ui` to place installed primitive components. Keeping this layout prevents configuration mismatches when adding new shadcn elements.

---

## 2. Transitioning to TypeScript

### Step 1: Install TypeScript Dependencies
Run the following command to add TypeScript, typings, and Vite-specific TypeScript configurations:
```bash
npm install -D typescript @types/react @types/react-dom @vitejs/plugin-react-swc
```

### Step 2: Add Config Files
Create a `tsconfig.json` file in the project root:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Path Aliasing */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

Create `tsconfig.node.json` in the root:
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.js", "vite.config.ts"]
}
```

### Step 3: Rename Files & Update Entry point
1. Rename your components from `.jsx` to `.tsx`.
2. Rename `src/main.jsx` to `src/main.tsx`.
3. Inside `index.html`, update the entry point script source:
   ```diff
   - <script type="module" src="/src/main.jsx"></script>
   + <script type="module" src="/src/main.tsx"></script>
   ```

---

## 3. Integrating Tailwind CSS

### Step 1: Install Tailwind and Autoprefixer
Run the installation command:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 2: Configure Template Paths
Update `tailwind.config.js` to look for your components:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 3: Add Tailwind Directives to CSS
At the very top of `src/index.css`, append:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 4. Initializing shadcn/ui

### Step 1: Initialize shadcn via CLI
Run the initialization script:
```bash
npx shadcn@latest init
```

### Step 2: Configure Installation Prompts
During the configuration wizard, select these options to align with the paths:
1. **Style**: `Default`
2. **Base color**: `Slate` (or your choice)
3. **Tailwind CSS variables**: `Yes`
4. **Custom CSS file path**: `src/index.css`
5. **Import alias for components**: `@/components`
6. **Import alias for utils**: `@/lib/utils`

Once complete, this will generate a `components.json` file in your root and a helper utility at `src/lib/utils.ts`.

### Step 3: Add shadcn UI Elements
Now you can install any shadcn primitive (e.g., button, slider) automatically:
```bash
npx shadcn@latest add button
```
This downloads and places the primitive directly under `src/components/ui/button.tsx`.
