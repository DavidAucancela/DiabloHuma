# Diablo Huma — Archivo Digital

## Qué es
Sitio web documental sobre el Diablo Huma, danzante ceremonial del 
Inti Raymi en Ecuador. Tres ejes: Conocimiento, Territorio, Archivo vivo.

## Stack
Next.js 15 (App Router), TypeScript, Tailwind v4, shadcn/ui, Sanity, 
Supabase, R3F, MapLibre, Framer Motion, GSAP. Trilingüe (es/ki/en) 
con next-intl. Deploy en Railway.

## Principios de diseño
- Fondo oscuro cálido (#14110D), no negro puro
- Tipografía: Fraunces (serif, titulares), Inter (sans, cuerpo)
- Acentos: #B33A2E (rojo), #C8A14B (dorado)
- Mobile-first siempre
- Respeto cultural: kichwa nunca traducido por Google Translate,
  nombres de comunidades correctamente acentuados, fotos con crédito

## Convenciones
- Componentes en PascalCase, archivos kebab-case
- Server Components por defecto, "use client" solo cuando necesario
- Queries de Sanity en src/lib/sanity/queries.ts
- Conventional Commits (feat:, fix:, docs:, refactor:)
- Tests con Vitest para utilidades, Playwright para flujos críticos

## Comandos
- pnpm dev / pnpm build / pnpm typecheck / pnpm lint
- pnpm sanity:dev para Sanity Studio
