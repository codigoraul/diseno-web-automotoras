# Diseño Web para Automotoras — Landing (Astro)

Landing page de DiseñoPáginas.cl para promocionar sitios web y plataformas de venta de vehículos para automotoras.

- **Stack:** Astro 7 (estático), CSS propio, Tabler Icons, Google Fonts (Inter + Sora).
- **Ruta de publicación:** `https://diseñopaginas.cl/diseno-web-automotoras/` (configurada en `astro.config.mjs` con `base`).
- **Deploy:** GitHub Actions → FTP a `/diseno-web-automotoras/` (secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`).

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321/diseno-web-automotoras/
npm run build     # genera dist/
npm run preview
```

## Estructura

- `src/pages/index.astro` — contenido, SEO (meta, OG, JSON-LD) y formulario → WhatsApp.
- `src/components/Header.astro`, `Footer.astro`, `SocialLinks.astro` — replican header y footer de diseñopaginas.cl con todos sus links.
- `src/components/HeroSlider.astro` — slider de 2 imágenes (autoplay, flechas, dots, swipe).
- `src/components/Faq.astro` — acordeón de preguntas frecuentes.
- `public/assets/img/` — imágenes WebP (reemplazables manteniendo el nombre).
