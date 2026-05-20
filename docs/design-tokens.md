# Design Tokens — Diablo Huma

Fuente única de verdad para colores, tipografía, espaciado, radios, sombras
y animación. Cada token tiene su CSS variable y la utilidad Tailwind que genera.

---

## Colores

### Escala primitiva (no usar directamente en componentes)

| Nombre           | Valor     | Descripción                         |
| ---------------- | --------- | ----------------------------------- |
| brown-950        | `#14110D` | Tierra oscura, base del sitio       |
| brown-900        | `#1F1A14` | Tierra media, superficies elevadas  |
| brown-800        | `#2E2418` | Tierra clara, bordes fuertes        |
| brown-600        | `#5C4A32` | Borde sutil                         |
| cream-100        | `#F0E8D8` | Hueso claro, texto primario         |
| sepia-400        | `#A89B85` | Sepia claro, texto atenuado         |
| red-700          | `#B33A2E` | Rojo del Diablo Huma                |
| red-600          | `#C94235` | Rojo activo / hover                 |
| gold-500         | `#C8A14B` | Dorado de bordado                   |
| gold-300         | `#E2BB70` | Dorado claro / hover                |
| teal-900         | `#1F4C5C` | Azul cielo andino                   |
| teal-700         | `#2D6B80` | Azul activo / hover                 |
| black-alpha-50   | `rgb(0 0 0 / 0.50)` | Overlay modal              |
| black-alpha-70   | `rgb(0 0 0 / 0.70)` | Overlay oscuro             |

---

### Tokens semánticos de color

Definidos en `globals.css` → `@theme`. Generan utilidades Tailwind.

#### Fondos

| CSS variable           | Valor primitivo   | Tailwind           | Uso                          |
| ---------------------- | ----------------- | ------------------ | ---------------------------- |
| `--color-bg-base`      | brown-950         | `bg-bg-base`       | Fondo de página              |
| `--color-bg-elevated`  | brown-900         | `bg-bg-elevated`   | Cards, paneles, modales      |
| `--color-bg-sunken`    | `#0F0D09`         | `bg-bg-sunken`     | Inputs, áreas inset          |
| `--color-overlay`      | black-alpha-50    | `bg-overlay`       | Backdrop de diálogos         |

#### Texto

| CSS variable             | Valor primitivo | Tailwind               | Uso                        |
| ------------------------ | --------------- | ---------------------- | -------------------------- |
| `--color-text-primary`   | cream-100       | `text-text-primary`    | Cuerpo principal           |
| `--color-text-muted`     | sepia-400       | `text-text-muted`      | Descripciones, meta        |
| `--color-text-disabled`  | `#6B5F4E`       | `text-text-disabled`   | Elementos deshabilitados   |
| `--color-text-inverse`   | brown-950       | `text-text-inverse`    | Sobre fondos claros        |

#### Bordes

| CSS variable               | Valor primitivo | Tailwind                 | Uso                          |
| -------------------------- | --------------- | ------------------------ | ---------------------------- |
| `--color-border`           | brown-600       | `border-border`          | Bordes por defecto           |
| `--color-border-strong`    | brown-800       | `border-border-strong`   | Bordes con énfasis           |
| `--color-border-focus`     | gold-500        | `border-border-focus`    | Focus ring de elementos      |

#### Acentos

| CSS variable                  | Valor primitivo | Tailwind                    | Uso                          |
| ----------------------------- | --------------- | --------------------------- | ---------------------------- |
| `--color-accent-red`          | red-700         | `bg-accent-red`             | CTA primario, alertas        |
| `--color-accent-red-hover`    | red-600         | `bg-accent-red-hover`       | Estado hover del rojo        |
| `--color-accent-gold`         | gold-500        | `text-accent-gold`          | Énfasis, locale activo       |
| `--color-accent-gold-hover`   | gold-300        | `text-accent-gold-hover`    | Estado hover del dorado      |
| `--color-accent-blue`         | teal-900        | `bg-accent-blue`            | Secundario, categorías       |
| `--color-accent-blue-hover`   | teal-700        | `bg-accent-blue-hover`      | Estado hover del azul        |

---

## Tipografía

### Familias

| CSS variable      | Fuente                        | Tailwind          | Uso                                  |
| ----------------- | ----------------------------- | ----------------- | ------------------------------------ |
| `--font-display`  | Fraunces (variable, opsz)     | `font-display`    | Titulares h1–h3, hero                |
| `--font-body`     | Inter (variable)              | `font-body`       | Cuerpo, UI, navegación               |

Las variables `--font-fraunces` y `--font-inter` las inyecta `next/font` en `<html>`.

### Escala tipográfica (Tailwind defaults — no se sobreescriben)

| Clase Tailwind | Rem    | px  | Uso típico                 |
| -------------- | ------ | --- | -------------------------- |
| `text-xs`      | 0.75   | 12  | Etiquetas, metadata        |
| `text-sm`      | 0.875  | 14  | Botones, captions          |
| `text-base`    | 1      | 16  | Cuerpo                     |
| `text-lg`      | 1.125  | 18  | Cuerpo destacado           |
| `text-xl`      | 1.25   | 20  | Subtítulos                 |
| `text-2xl`     | 1.5    | 24  | Títulos de sección         |
| `text-3xl`     | 1.875  | 30  | Títulos de página          |
| `text-4xl`     | 2.25   | 36  | Titulares                  |
| `text-5xl`     | 3      | 48  | Hero principal             |
| `text-6xl`     | 3.75   | 60  | Display grande             |

---

## Radios de borde

| CSS variable     | Valor      | Tailwind       | Uso                              |
| ---------------- | ---------- | -------------- | -------------------------------- |
| `--radius-xs`    | `0.125rem` | `rounded-xs`   | Badges, chips pequeños           |
| `--radius-sm`    | `0.25rem`  | `rounded-sm`   | Inputs, botones pequeños         |
| `--radius-md`    | `0.5rem`   | `rounded-md`   | Cards, botones                   |
| `--radius-lg`    | `0.875rem` | `rounded-lg`   | Modales, panels grandes          |
| `--radius-xl`    | `1.5rem`   | `rounded-xl`   | Componentes prominentes          |
| `--radius-full`  | `9999px`   | `rounded-full` | Avatares, pills                  |

---

## Sombras

Optimizadas para fondos oscuros — sin color de sombra por defecto.

| CSS variable       | Tailwind          | Uso                                   |
| ------------------ | ----------------- | ------------------------------------- |
| `--shadow-card`    | `shadow-card`     | Cards en superficie base              |
| `--shadow-raised`  | `shadow-raised`   | Cards elevadas, dropdowns             |
| `--shadow-modal`   | `shadow-modal`    | Diálogos, drawers                     |
| `--shadow-glow-gold` | `shadow-glow-gold` | Énfasis especial, elementos activos |

---

## Funciones de easing

| CSS variable       | Valor                        | Tailwind       | Uso                             |
| ------------------ | ---------------------------- | -------------- | ------------------------------- |
| `--ease-smooth`    | `cubic-bezier(0.4,0,0.2,1)` | `ease-smooth`  | Transiciones UI estándar        |
| `--ease-spring`    | `cubic-bezier(0.34,1.56,0.64,1)` | `ease-spring` | Aparición de elementos       |
| `--ease-out-expo`  | `cubic-bezier(0.16,1,0.3,1)` | `ease-out-expo` | Salida de overlays, modales   |

---

## Z-index

No generan utilidades Tailwind — se usan como CSS vars directamente.

| CSS variable       | Valor | Uso                           |
| ------------------ | ----- | ----------------------------- |
| `--z-base`         | `0`   | Flujo normal                  |
| `--z-raised`       | `10`  | Cards, elementos flotantes    |
| `--z-dropdown`     | `100` | Menús desplegables            |
| `--z-sticky`       | `200` | Header sticky                 |
| `--z-overlay`      | `300` | Backdrops                     |
| `--z-modal`        | `400` | Diálogos, drawers             |
| `--z-toast`        | `500` | Notificaciones                |

---

## Uso en código

```tsx
// Tailwind utilities (preferido en componentes)
<div className="bg-bg-elevated text-text-primary border border-border rounded-md shadow-card">

// CSS vars (para casos especiales, animaciones GSAP, etc.)
style={{ backgroundColor: "var(--color-accent-gold)" }}
```
