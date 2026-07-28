# PawStore — Etapa 1: Catálogo estático y estructura base

Primera fase del sitio web de PawStore, una tienda en línea de productos para
mascotas. Esta entrega implementa la estructura base del sitio (header, main,
footer), la página de inicio, el catálogo de productos y el detalle de
producto, usando únicamente componentes funcionales de React y un archivo
JSON como fuente de datos.

## Stack técnico

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) (JavaScript)
- Sin `react-router-dom` — la navegación entre vistas se maneja con estado
  simple en `App.jsx` (sin recargar la página)
- Sin backend ni autenticación — el catálogo se lee de un archivo JSON local

## Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (viene incluido con Node.js)

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
git clone <url-del-repositorio>
cd pawstore-vite
npm install
```

## Ejecución en modo desarrollo

```bash
npm run dev
```

Esto levanta el servidor de desarrollo de Vite (por defecto en
`http://localhost:5173`).

## Build de producción

```bash
npm run build
```

Genera la versión optimizada del sitio en la carpeta `dist/`.

## Estructura del proyecto

```
pawstore-vite/
├─ public/
│  └─ productos/        # Imágenes de los productos del catálogo
├─ src/
│  ├─ components/        # Header, Footer, NavLink, Inicio, Catalogo,
│  │                      # ProductCard, Detalle, Contacto
│  ├─ data/
│  │  └─ products.json   # Única fuente de datos del catálogo
│  ├─ App.jsx             # Estado de navegación (vistaActual) y producto
│  │                      # seleccionado; renderiza la vista activa
│  ├─ main.jsx
│  └─ index.css           # Estilos globales del sitio
└─ package.json
```

## Vistas incluidas en esta entrega

- **Inicio** — bienvenida y acceso al catálogo
- **Catálogo de productos** — grilla de tarjetas de producto (imagen, nombre,
  precio, categoría) generadas a partir de `products.json`
- **Detalle de producto** — vista ampliada de un producto seleccionado desde
  el catálogo
- **Contacto** — vista placeholder, agregada para mantener el menú de
  navegación completo

## Alcance de esta entrega

Esta fase se limita a la presentación estática del catálogo. Quedan fuera de
alcance (previstas para etapas posteriores):

- Formularios de creación/edición de productos
- Conexión con backend o API
- Autenticación
- Carrito de compras y checkout
- Enrutamiento con `react-router-dom`
