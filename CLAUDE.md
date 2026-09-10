## Proyecto

Landing page "Diseño Web para Automotoras" de DiseñoPaginas.cl, en Astro (estático).
Se publica en la subcarpeta `/diseno-web-automotoras/` del hosting vía GitHub Actions + FTP
(ver `.github/workflows/deploy.yml`). `astro.config.mjs` ya usa `base: '/diseno-web-automotoras'`,
por lo que todos los assets internos se referencian con `import.meta.env.BASE_URL`.

## Development

Servidor de desarrollo en segundo plano:

```
astro dev --background
```

Se administra con `astro dev stop`, `astro dev status` y `astro dev logs`.

## Estructura

- `src/pages/index.astro` — contenido de la landing (hero slider, secciones, FAQ, contacto).
- `src/components/Header.astro` / `Footer.astro` — header y footer replicados de diseñopaginas.cl con todos sus links (absolutos).
- `src/components/HeroSlider.astro` — slider de 2 imágenes con título/subtítulo/CTA.
- `src/styles/global.css` — sistema de diseño (navy/aqua, Inter + Sora).
- `public/assets/img/` — imágenes optimizadas en WebP.

## Documentation

Full documentation: https://docs.astro.build
