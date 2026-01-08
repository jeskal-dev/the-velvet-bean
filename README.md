# Plan de Desarrollo: The Velvet Bean ☕

**Nombre del Proyecto:** The Velvet Bean  
**Tipo:** Sitio Web de Presentación (Showcase)  
**Tecnologías:** Astro, TypeScript, Tailwind CSS, tailwindcss-motion  
**Estado:** Planificación

---

## 1. Resumen del Proyecto

Desarrollar una página web elegante y moderna para una tienda de café artesanal llamada "The Velvet Bean". El sitio debe transmitir sofisticación y calidez, destacando la calidad del café y la experiencia del cliente. El sitio será estático, de alto rendimiento y con animaciones fluidas para mejorar la experiencia de usuario (UX).

### Objetivos Principales

1. Mostrar el menú de productos de forma atractiva.
2. Contar la historia y la filosofía de la marca.
3. Implementar micro-interacciones y animaciones suaves usando `tailwindcss-motion`.
4. Asegurar un rendimiento óptimo y SEO utilizando Astro.

---

## 2. Stack Tecnológico

- **Framework:** [Astro](https://astro.build/) (Para arquitectura de islas y renderizado estático).
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Para tipado seguro de componentes y datos).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Para diseño utility-first).
- **Animaciones:** [tailwindcss-motion](https://www.npmjs.com/package/tailwindcss-motion) (Plugin para animaciones complejas directamente en clases).
- **Gestión de Paquetes:** `pnpm`.

---

## 3. Diseño y Identidad Visual

- **Paleta de Colores (Sugerida):**

  ```css
  @theme {
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --color-card: var(--card);
    --color-card-foreground: var(--foreground);
    --color-popover: var(--card);
    --color-popover-foreground: var(--foreground);
    --color-primary: var(--primary);
    --color-primary-foreground: var(--primary-foreground);
    --color-secondary: var(--secondary);
    --color-secondary-foreground: var(--foreground);
    --color-muted: var(--muted);
    --color-muted-foreground: var(--muted-foreground);
    --color-accent: var(--accent);
    --color-accent-foreground: var(--accent-foreground);
    --color-destructive: oklch(0.55 0.22 25);
    --color-destructive-foreground: oklch(0.98 0.01 85);
    --color-border: var(--border);
    --color-input: var(--border);
    --color-ring: var(--ring);

    --radius: 0.5rem;
  }
  ```

- **Tipografía:**
  - Títulos: Serif elegante (ej. Playfair Display).
  - Cuerpo: Sans-serif limpia (ej. Lato o Inter).
- **Estilo:** Minimalista, uso de espacio en blanco, imágenes de alta resolución, transiciones suaves.

---

## 4. Estructura de Archivos y Carpetas

Se propone la siguiente estructura para mantener el orden en Astro:

```

/src
/components
/ui
button.astro
card.astro
/layouts
header.astro
footer.astro
layout.astro # Estructura base (HTML, Head, Body)
/sections
hero.astro
menu-item.astro
/pages
index.astro # Inicio
about.astro # Sobre Nosotros
menu.astro # Menú
/styles
global.css
/types
menu.types.ts # Interfaces de TypeScript
/data
menu.ts # Datos del menú (Array de objetos)

```

---

## 5. Desglose de Páginas

### A. Inicio (`index.astro`)

**Objetivo:** Causar una primera impresión impactante.

- **Secciones:**
  1. **Hero:** Imagen de fondo grande/título "The Velvet Bean" con animación de entrada (fade-in).
  2. **Feature Preview:** 3 columnas destacando "Origen", "Calidad", "Sabor".
  3. **Call to Action (CTA):** Botón invitando a ver el menú o visitar la tienda.
- **Animaciones:** Uso de `motion-fade-in-up` para textos e imágenes.

### B. Sobre Nosotros (`about.astro`)

**Objetivo:** Conectar emocionalmente con el usuario.

- **Secciones:**
  1. **Nuestra Historia:** Texto narrativo + imagen de los fundadores o la tienda.
  2. **El Proceso:** Íconos o pequeño paso a paso de cómo seleccionan el grano.
  3. **Valores:** Sostenibilidad, comercio justo, etc.
- **Animaciones:** Scroll-reveal (aparecer elementos al hacer scroll).

### C. Menú (`menu.astro`)

**Objetivo:** Presentar los productos de forma clara y apetitosa.

- **Secciones:**
  1. **Filtros (Opcional):** Café de especialidad, Postres, Bebidas frías.
  2. **Grid de Productos:** Tarjetas (Cards) con:
  - Nombre del producto.
  - Descripción breve.
  - Precio.
  - Imagen (usando `picsum` o placeholders si no hay assets reales).
- **Lógica:** Mapear un array de TypeScript (`MenuItem[]`) para generar las tarjetas dinámicamente.

---

## 6. Roadmap de Desarrollo

### Fase 1: Configuración Inicial ⚙️

- [ ] Inicializar proyecto Astro: `pnpm create astro@latest`.
- [ ] Instalar dependencias: TypeScript, Tailwind CSS.
- [ ] Instalar y configurar `tailwindcss-motion` en `global.css (Tailwind v4)`.
- [ ] Configurar estructura de carpetas básica.
- [ ] Definir interfaces de TypeScript en `/types`.

### Fase 2: Componentes Base y Layout 🧩

- [ ] Crear `layout.astro` (Meta tags, fuentes, estructura global).
- [ ] Crear `header.astro` con navegación responsive (Mobile menu).
- [ ] Crear `footer.astro` con información de contacto y redes.
- [ ] Configurar colores globales en Tailwind.

### Fase 3: Desarrollo de Páginas (Contenido) 📄

- [ ] **Inicio:** Desarrollar Hero y secciones informativas.
- [ ] **Sobre Nosotros:** Maquetar sección de historia y valores.
- [ ] **Menú:** Crear el archivo de datos `menu.ts` y el componente `card.astro`. Implementar el mappeo de datos en `menu.astro`.

### Fase 4: Animaciones, Micro-interacciones y Gradientes ✨

- [ ] Aplicar clases de `tailwindcss-motion` a los títulos (entradas suaves).
- [ ] Implementar efectos _hover_ en las tarjetas del menú (escala o sombra).
- [ ] Añadir transiciones de página (View Transitions de Astro).

### Fase 5: Testing y Optimización 🚀

- [ ] Revisar responsividad (Mobile, Tablet, Desktop).
- [ ] Validar tipado de TypeScript (sin errores `any`).
- [ ] Optimizar imágenes (usar `<Image />` de Astro).
- [ ] Despliegue en Vercel/Netlify (Configurar build command).

---

## 7. Datos del Menú (Estructura TS)

Referencia para el archivo `/src/types/menu.ts`:

```typescript
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "coffee" | "pastry" | "tea";
  image?: string;
}
```

---

## 8. Comandos Útiles

```bash
# Instalar Astro
pnpm create astro@latest the-velvet-bean

# Entrar a la carpeta
cd the-velvet-bean

# Instalar Tailwind y sus dependencias
pnpm astro add tailwind

# Instalar plugin de motion (Asumiendo instalación estándar npm)
pnpm install tailwindcss-motion

# Iniciar servidor de desarrollo
pnpm dev

# Build para producción
pnpm build
```
