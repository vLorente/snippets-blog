---
draft: true
title: Animaciones con SWUP
published: 2024-04-18
description: Animaciones y transiciones de página fluidas con Swup en AstroJS.
cover: "./swup-social.webp"
tags: [Animaciones, AstroJS, Swup]
category: FrontEnd
---

# Integración con AstroJS

[Repositorio](https://github.com/swup/astro) de la integración oficial de Swup para AstroJS.

[Documentación oficial de Swup](https://swup.js.org/getting-started/)

Primero, instalar el paquete de `@swup/astro`

```sh
# npm
npm install @swup/astro

# pnpm
pnpm add @swup/astro
```

Después, se aplica la integración en el fichero de configuración de astro usando la propiedad `integrations`:

```javascript
// astro.config.mjs
import { defineConfig } from "astro/config"
import swup from "@swup/astro"
export default defineConfig({
 integrations: [swup()],
})
```

# Uso

## Cambio de página fluido

Una vez instalado `swup` de forma automática comienza a manejar las transiciones de página, de tal modo que el cambio de página comienza a hacerse de forma fluida y sin recargar los componentes estáticos.

## Animaciones

Primero, definir la animación que vamos a usar para la carga de los componentes en el los estilos globales del `Layout.astro`

```css
<style is:global>
		@keyframes fade-in-up {
			0% {
				transform: translateY(2rem);
				opacity: 0;
			}
			100% {
				transform: translateY(0);
				opacity: 1;
			}
		}
		.onload-animation {
			opacity: 0;
			animation: 300ms fade-in-up;
			animation-fill-mode: forwards;
		}
</style>
```

```css


		#top-row {
			animation-delay: 0ms;
		}
		#sidebar {
			animation-delay: 100ms;
		}
		#content-wrapper {
			animation-delay: var(--content-delay);
		}
		#footer {
			animation-delay: 400ms;
		}
```
